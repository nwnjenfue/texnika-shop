require('dotenv').config();
const path = require('path');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({ host: process.env.PGHOST || 'localhost', port: Number(process.env.PGPORT || 5432), database: process.env.PGDATABASE || 'kuper', user: process.env.PGUSER || 'postgres', password: process.env.PGPASSWORD });
const secret = process.env.JWT_SECRET || 'change-this-secret-before-production';
app.use(express.json());
app.use(express.static(__dirname));

function auth(req, res, next) {
  try { req.user = jwt.verify((req.headers.authorization || '').replace('Bearer ', ''), secret); next(); }
  catch { res.status(401).json({ message: 'Требуется вход в аккаунт' }); }
}
async function admin(req, res, next) {
  auth(req, res, async () => {
    try { const result = await pool.query('SELECT is_admin FROM users WHERE id=$1', [req.user.id]); if (!result.rows[0]?.is_admin) return res.status(403).json({ message: 'Доступ только для администратора' }); next(); }
    catch { res.status(500).json({ message: 'Не удалось проверить права доступа' }); }
  });
}
async function setupDatabase() {
  await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT FALSE');
  if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
    const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);
    await pool.query('INSERT INTO users (name,email,password_hash,is_admin) VALUES ($1,$2,$3,true) ON CONFLICT (email) DO UPDATE SET is_admin=true', ['Администратор KUPER', process.env.ADMIN_EMAIL.toLowerCase(), hash]);
  }
}
function userPayload(user) { return { id: user.id, name: user.name, email: user.email, isAdmin: Boolean(user.is_admin) }; }
function tokenFor(user) { return jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '7d' }); }
app.get('/api/health', async (_req, res) => { try { await pool.query('SELECT 1'); res.json({ ok: true }); } catch { res.status(503).json({ ok: false, message: 'PostgreSQL недоступен' }); } });
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name?.trim() || !/^\S+@\S+\.\S+$/.test(email || '') || String(password || '').length < 6) return res.status(400).json({ message: 'Укажите имя, корректный e-mail и пароль от 6 символов' });
  try { const result = await pool.query('INSERT INTO users (name,email,password_hash) VALUES ($1,$2,$3) RETURNING id,name,email,is_admin', [name.trim(), email.toLowerCase().trim(), await bcrypt.hash(password, 12)]); const user = result.rows[0]; res.status(201).json({ user: userPayload(user), token: tokenFor(user) }); }
  catch (err) { res.status(err.code === '23505' ? 409 : 500).json({ message: err.code === '23505' ? 'Этот e-mail уже зарегистрирован' : 'Не удалось создать аккаунт' }); }
});
app.post('/api/auth/login', async (req, res) => {
  const result = await pool.query('SELECT * FROM users WHERE email=$1', [String(req.body.email || '').toLowerCase().trim()]); const user = result.rows[0];
  if (!user || !await bcrypt.compare(req.body.password || '', user.password_hash)) return res.status(401).json({ message: 'Неверный e-mail или пароль' });
  res.json({ user: userPayload(user), token: tokenFor(user) });
});
app.get('/api/products', async (_req, res) => { const result = await pool.query('SELECT id,name,category,price,old_price AS "oldPrice",image,badge,description AS desc,specs FROM products ORDER BY id'); res.json(result.rows); });
app.post('/api/products', admin, async (req, res) => {
  const { name, category, price, oldPrice, image, badge, desc, specs } = req.body;
  if (!name?.trim() || !category || !Number.isFinite(Number(price)) || Number(price) < 0) return res.status(400).json({ message: 'Заполните название, категорию и цену' });
  const result = await pool.query('INSERT INTO products (name,category,price,old_price,image,badge,description,specs) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id,name,category,price,old_price AS "oldPrice",image,badge,description AS desc,specs', [name.trim(), category, Number(price), oldPrice ? Number(oldPrice) : null, image || null, badge || null, desc || '', specs || {}]);
  res.status(201).json(result.rows[0]);
});
app.get('/api/me/orders', auth, async (req, res) => { const orders = await pool.query('SELECT id,total,payment_method,status,created_at FROM orders WHERE user_id=$1 ORDER BY created_at DESC', [req.user.id]); res.json(orders.rows); });
app.post('/api/orders', auth, async (req, res) => {
  const items = Array.isArray(req.body.items) ? req.body.items : []; if (!items.length) return res.status(400).json({ message: 'Корзина пуста' });
  const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0); const client = await pool.connect();
  try { await client.query('BEGIN'); const order = await client.query('INSERT INTO orders (user_id,total,payment_method) VALUES ($1,$2,$3) RETURNING id', [req.user.id, total, req.body.paymentMethod || 'Карта']); for (const item of items) await client.query('INSERT INTO order_items (order_id,product_id,product_name,price,quantity) VALUES ($1,$2,$3,$4,$5)', [order.rows[0].id, item.id, item.name, item.price, item.quantity || 1]); await client.query('COMMIT'); res.status(201).json({ id: order.rows[0].id }); }
  catch { await client.query('ROLLBACK'); res.status(500).json({ message: 'Не удалось сохранить заказ' }); } finally { client.release(); }
});
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));
setupDatabase().then(() => app.listen(Number(process.env.PORT || 3000), () => console.log('KUPER: http://localhost:' + (process.env.PORT || 3000)))).catch(error => { console.error('Database setup failed:', error); process.exit(1); });
