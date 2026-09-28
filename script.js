const db = [
    {
        id: 1, name: "Yale Linus Smart Lock", category: "smart", price: 120000, oldPrice: 142000,
        image: "https://gw-assets.assaabloy.com/is/image/assaabloy/5052847131336.MAIN-6",
        badge: "-15%",
        desc: "Yale Linus® Smart Lock — умный замок без ключа. Ставится поверх существующего цилиндра с внутренней стороны двери. Управление со смартфона, виртуальные ключи, история входов.",
        specs: { "Тип устройства": "Умный дверной замок", "Совместимость": "Apple HomeKit, Google Home", "Протокол": "Bluetooth 4.2, Wi-Fi", "Питание": "4 батарейки AA", "Материал": "Металл", "Цвет": "Серебристый" }
    },
    {
        id: 2, name: "Roborock S7 MaxV Ultra", category: "cleaning", price: 450000, oldPrice: null,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hb7/hc1/65052476243998.jpg?format=gallery-medium",
        badge: "HIT",
        desc: "Флагманский робот-пылесос с док-станцией Empty Wash Fill Dock: пылесосит, моет, сам чистит пылесборник, стирает тряпку и наполняет бак. Камера с ИИ объезжает препятствия даже в темноте.",
        specs: { "Мощность": "5100 Па", "Навигация": "LiDAR + RGB + 3D", "Влажная уборка": "Sonic Mopping", "Станция": "Самоочистка (мусор/вода/тряпка)", "Аккумулятор": "5200 мАч", "Шум": "67 дБ" }
    },
    {
        id: 3, name: "Dyson Purifier Cool™ TP07", category: "smart", price: 320000, oldPrice: null,
        image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/hero/385278-01.png?$responsive$&cropPathE=mobile&fit=stretch,1&wid=640",
        badge: null,
        desc: "Очиститель воздуха с функцией вентилятора. Улавливает 99.95% частиц, герметичен по HEPA H13. Автоматически распознаёт загрязнители и показывает данные на LCD.",
        specs: { "Фильтр": "HEPA H13 + Угольный", "Площадь": "до 40 м²", "Управление": "Пульт, Dyson Link App", "Функции": "Очистка, Охлаждение", "Вращение": "350°", "Вес": "4.65 кг" }
    },
    {
        id: 4, name: "Smeg Espresso Machine", category: "kitchen", price: 180000, oldPrice: null,
        image: "https://cdn.entero.ru/mp@2x/77/e2/77e2bbce525230cd6cc4ffa1137f0dde.jpg",
        badge: "Design",
        desc: "Эспрессо-кофемашина в стиле 50-х. Давление 15 бар, термоблок, ручной капучинатор. Итальянский корпус без декоративного шума вокруг функции.",
        specs: { "Давление": "15 Бар", "Тип": "Рожковая", "Капучинатор": "Ручной (паровая трубка)", "Корпус": "Нержавеющая сталь", "Объем бака": "1 л", "Страна": "Италия" }
    },
    {
        id: 5, name: "Samsung Bespoke Fridge", category: "kitchen", price: 850000, oldPrice: 940000,
        image: "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/bespoke/rf23bb8600qlaa/RF23BB8600QL_01_Stainless_Steel_SCOM.jpg?$product-details-jpg$?$product-details-jpg$",
        badge: "SALE",
        desc: "Холодильник Bespoke: сменные панели, Metal Cooling держит холод при частом открывании дверцы. Full No Frost, тихий инвертор.",
        specs: { "Объем": "350 л", "Система": "Full No Frost", "Особенность": "Сменные панели", "Компрессор": "Инверторный", "Шум": "35 дБ (Тихий)", "Класс": "A+" }
    },
    {
        id: 6, name: "Sonos One Gen 2", category: "smart", price: 110000, oldPrice: null,
        image: "https://m.media-amazon.com/images/I/71dJ0HXTD0L._AC_SL1500_.jpg",
        badge: null,
        desc: "Компактная колонка с плотным звуком. Влагозащита, AirPlay 2, стереопара или связка с саундбаром Sonos.",
        specs: { "Подключение": "Wi-Fi, Ethernet, AirPlay 2", "Влагозащита": "Есть (устойчив к пару)", "Микрофоны": "Дальнего поля", "Аудио": "2 цифровых усилителя", "Габариты": "161x119 мм" }
    },
    {
        id: 7, name: "Samsung The Freestyle 2nd Gen", category: "smart", price: 299000, oldPrice: null,
        image: "https://a-static.mlcdn.com.br/800x800/samsung-the-freestyle-2nd-gen-projetor-smart-portatil-de-30-a-100-polegadas-plataforma-tizen-som-360o/samsung/6014/cc00224efb2be6c7be45e5c26af5ea9c.jpeg",
        badge: "NEW",
        desc: "Компактный смарт-проектор с автоматической настройкой изображения. Создаёт экран до 100 дюймов, работает со стримингами и легко переносится между комнатами.",
        specs: { "Разрешение": "Full HD", "Диагональ": "до 100 дюймов", "Настройка": "Автофокус и автокоррекция", "Система": "Samsung Smart TV", "Звук": "360°", "Вес": "0.8 кг" }
    }
];

const defaultProducts = db.map(product => ({ ...product, specs: { ...product.specs } }));

const initialReviews = [
    { name: "Азамат К.", rating: "★★★★★", text: "Замок Yale — точно. HomeKit без сюрпризов.", product: "Yale Linus Smart Lock", photo: "" },
    { name: "Елена С.", rating: "★★★★★", text: "Робот снял вопрос шерсти. Карта точная.", product: "Roborock S7 MaxV Ultra", photo: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=200&auto=format&fit=crop" },
    { name: "Дмитрий В.", rating: "★★☆☆☆", text: "Доставка опоздала на 2 дня. Упаковка мятая, холодильник цел.", product: "Samsung Bespoke Fridge", photo: "" },
    { name: "Алина М.", rating: "★★★★★", text: "Smeg держит кухню. Кофе плотный.", product: "Smeg Espresso Machine", photo: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=200&auto=format&fit=crop" }
];

const PRODUCT_IMAGE_PLACEHOLDER = "assets/product-placeholder.svg";
const SPAN_CYCLE = ["span-8", "span-4", "span-6", "span-6", "span-4", "span-8"];

const app = {
    cart: [],
    isVip: false,
    currentPaymentMethod: "Карта",
    currentFilter: "all",
    searchQuery: "",
    authMode: "login",
    user: null,
    token: null,

    init: async function () {
        this.loadDb();
        this.restoreSession();
        await this.syncProducts();
        this.renderProducts("all");
        this.renderReviews();
        this.populateProductSelect();
        this.bindChrome();
    },

    syncProducts: async function () {
        try {
            const response = await fetch('/api/products');
            if (!response.ok) return;
            const serverProducts = await response.json();
            serverProducts.forEach(product => {
                const index = db.findIndex(current => String(current.id) === String(product.id));
                if (index === -1) db.push(product); else db[index] = { ...db[index], ...product };
            });
            this.saveDb();
        } catch { /* Каталог остаётся доступным без сети */ }
    },

    bindChrome: function () {
        window.addEventListener("scroll", () => {
            document.body.classList.toggle("is-scrolled", window.scrollY > 24);
        }, { passive: true });
    },

    toggleNav: function () {
        const overlay = document.getElementById("navOverlay");
        const open = !overlay.classList.contains("active");
        overlay.classList.toggle("active", open);
        document.body.classList.toggle("is-nav-open", open);
    },

    closeNav: function (event, element) {
        document.getElementById("navOverlay")?.classList.remove("active");
        document.body.classList.remove("is-nav-open");
        const href = element?.getAttribute?.("href");
        if (href && href.startsWith("#")) {
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: "smooth" });
        }
    },

    escapeHTML: function (value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    },

    getProductImage: function (product) {
        return product && product.image ? product.image : PRODUCT_IMAGE_PLACEHOLDER;
    },

    getProductById: function (id) {
        return db.find(x => String(x.id) === String(id));
    },

    getCategoryTitle: function (cat) {
        const names = { smart: "Smart Home", kitchen: "Кухня", cleaning: "Уборка" };
        return names[cat] || cat || "Другое";
    },

    specsToText: function (specs) {
        return Object.entries(specs || {}).map(([key, value]) => `${key}: ${value}`).join("\n");
    },

    specsFromText: function (text) {
        const specs = {};
        String(text || "").split("\n").forEach(line => {
            const separatorIndex = line.indexOf(":");
            if (separatorIndex === -1) return;
            const key = line.slice(0, separatorIndex).trim();
            const value = line.slice(separatorIndex + 1).trim();
            if (key && value) specs[key] = value;
        });
        return specs;
    },

    refreshCatalog: function () {
        this.renderProducts(this.currentFilter || "all");
        this.populateProductSelect();
        this.updateCartUI();
    },

    renderProducts: function (cat) {
        this.currentFilter = cat || this.currentFilter || "all";
        const needle = this.searchQuery.trim().toLowerCase();
        const products = db.filter(p => {
            const searchableText = `${p.name} ${p.desc} ${this.getCategoryTitle(p.category)} ${Object.entries(p.specs || {}).flat().join(" ")}`.toLowerCase();
            return (this.currentFilter === "all" || p.category === this.currentFilter) && (!needle || searchableText.includes(needle));
        });

        document.getElementById("productsContainer").innerHTML = products.length ? products.map((p, index) => {
            const safeName = this.escapeHTML(p.name);
            const safeCategory = this.escapeHTML(this.getCategoryTitle(p.category));
            const safeImage = this.escapeHTML(this.getProductImage(p));
            const safeBadge = this.escapeHTML(p.badge || "");
            const span = SPAN_CYCLE[index % SPAN_CYCLE.length];
            const price = Number(p.price || 0);
            const oldPrice = p.oldPrice ? Number(p.oldPrice) : null;
            const priceHtml = oldPrice
                ? `<div class="product-price-block"><span class="price-old">${oldPrice.toLocaleString()} ₸</span><span class="price-current">${price.toLocaleString()} ₸</span></div>`
                : `<div class="product-price-block"><span class="price-current">${price.toLocaleString()} ₸</span></div>`;

            return `
                <article class="product-card ${span}" onclick="app.openProductModal(${p.id})">
                    ${p.badge ? `<div class="sale-badge">${safeBadge}</div>` : ""}
                    <div class="catalog-admin-actions" onclick="event.stopPropagation()">
                        <button class="admin-btn edit" type="button" onclick="app.openEditProductModal(${p.id})">Изменить</button>
                        <button class="admin-btn delete" type="button" onclick="app.deleteProduct(${p.id})">Удалить</button>
                    </div>
                    <div class="product-image-wrapper"><img src="${safeImage}" alt="${safeName}" loading="lazy" decoding="async" onerror="this.src='${PRODUCT_IMAGE_PLACEHOLDER}'"></div>
                    <div class="product-info">
                        <span class="product-cat">${safeCategory}</span>
                        <h3 class="product-title">${safeName}</h3>
                        ${priceHtml}
                        <div class="card-buttons">
                            <div class="btn-details">Детали</div>
                            <button class="btn" type="button" onclick="event.stopPropagation(); app.addToCart(${p.id})">В корзину</button>
                        </div>
                    </div>
                </article>`;
        }).join("") : `<div class="empty-catalog">${needle ? `По запросу «${this.escapeHTML(this.searchQuery)}» ничего не найдено.` : "В этой категории пока нет товаров."}</div>`;
    },

    filterProducts: function (cat, btn) {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderProducts(cat);
    },

    searchProducts: function (value) {
        this.searchQuery = value || "";
        this.renderProducts(this.currentFilter);
    },

    restoreSession: function () {
        try { this.user = JSON.parse(localStorage.getItem("kuper_user")); this.token = localStorage.getItem("kuper_token"); } catch { this.user = null; }
        this.updateAccountButton();
    },

    updateAccountButton: function () {
        const button = document.getElementById("accountButton");
        if (button) button.textContent = this.user ? "Кабинет" : "Войти";
    },

    openAccount: async function () {
        if (!this.user || !this.token) { this.authMode = "login"; this.renderAuth(); document.getElementById("authModal").classList.add("active"); return; }
        document.getElementById("accountUser").textContent = `${this.user.name} · ${this.user.email}`;
        document.getElementById("accountModal").classList.add("active");
        const list = document.getElementById("ordersList"); list.innerHTML = "Загрузка заказов…";
        try { const response = await fetch("/api/me/orders", { headers: { Authorization: `Bearer ${this.token}` } }); if (!response.ok) throw new Error(); const orders = await response.json(); list.innerHTML = orders.length ? orders.map(o => `<div class="order-row"><strong>Заказ №${o.id}</strong><span>${new Date(o.created_at).toLocaleDateString("ru-RU")} · ${Number(o.total).toLocaleString()} ₸</span><small>${this.escapeHTML(o.status)}</small></div>`).join("") : "Заказов пока нет."; } catch { list.innerHTML = "Не удалось загрузить заказы. Проверьте подключение к серверу."; }
    },

    renderAuth: function () {
        const register = this.authMode === "register";
        document.getElementById("authTitle").textContent = register ? "Регистрация" : "Вход";
        document.getElementById("authNameGroup").hidden = !register;
        document.getElementById("authName").required = register;
        document.getElementById("authSubmit").textContent = register ? "Создать аккаунт" : "Войти";
        document.getElementById("authSwitch").textContent = register ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться";
    },

    toggleAuthMode: function () { this.authMode = this.authMode === "login" ? "register" : "login"; this.renderAuth(); },

    submitAuth: async function (event) {
        event.preventDefault(); const register = this.authMode === "register";
        const payload = { email: document.getElementById("authEmail").value, password: document.getElementById("authPassword").value, name: document.getElementById("authName").value };
        try { const response = await fetch(register ? "/api/auth/register" : "/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); const data = await response.json(); if (!response.ok) throw new Error(data.message); this.user = data.user; this.token = data.token; localStorage.setItem("kuper_user", JSON.stringify(data.user)); localStorage.setItem("kuper_token", data.token); this.updateAccountButton(); this.closeModal("authModal"); event.target.reset(); this.showToast(register ? "Аккаунт создан" : "Вы вошли в аккаунт"); } catch (error) { this.showToast(error.message || "Не удалось выполнить вход"); }
    },

    logout: function () { localStorage.removeItem("kuper_user"); localStorage.removeItem("kuper_token"); this.user = null; this.token = null; this.closeModal("accountModal"); this.updateAccountButton(); this.showToast("Вы вышли из аккаунта"); },

    openProductModal: function (id) {
        const p = this.getProductById(id);
        if (!p) return this.showToast("Товар не найден");

        let specs = "";
        for (let k in (p.specs || {})) {
            specs += `<tr><td class="specs-key">${this.escapeHTML(k)}</td><td class="specs-val">${this.escapeHTML(p.specs[k])}</td></tr>`;
        }
        if (!specs) specs = '<tr><td class="specs-key">Характеристики</td><td class="specs-val">Не указаны</td></tr>';

        const price = Number(p.price || 0);
        let priceDisplay = `<div class="pd-price-lg">${price.toLocaleString()} ₸</div>`;
        if (p.oldPrice) {
            priceDisplay = `<div class="pd-price-row"><div class="price-old">${Number(p.oldPrice).toLocaleString()} ₸</div><div class="pd-price-lg">${price.toLocaleString()} ₸</div></div>`;
        }

        document.getElementById("productModalBody").innerHTML = `
            <div class="pd-grid">
                <div class="pd-image-col"><img src="${this.escapeHTML(this.getProductImage(p))}" alt="${this.escapeHTML(p.name)}" decoding="async" onerror="this.src='${PRODUCT_IMAGE_PLACEHOLDER}'"></div>
                <div class="pd-info-col">
                    <div class="pd-header"><div class="pd-title-lg">${this.escapeHTML(p.name)}</div>${priceDisplay}</div>
                    <div class="pd-description">${this.escapeHTML(p.desc || "")}</div>
                    <p class="field-label">Характеристики</p>
                    <table class="specs-table">${specs}</table>
                    <div class="pd-actions">
                        <button class="btn" type="button" onclick="app.addToCart(${p.id}); app.closeModal('productModal')">В корзину</button>
                        <button class="btn-outline" type="button" onclick="app.openEditProductModal(${p.id})">Изменить</button>
                        <button class="btn-danger" type="button" onclick="app.deleteProduct(${p.id})">Удалить</button>
                    </div>
                </div>
            </div>
        `;
        document.getElementById("productModal").classList.add("active");
    },

    closeModal: function (id) {
        const modal = document.getElementById(id);
        if (modal) modal.classList.remove("active");
    },

    addToCart: function (id) {
        const p = this.getProductById(id);
        if (!p) return this.showToast("Товар не найден");
        this.cart.push({ ...p, tId: Date.now() + Math.random() });
        this.updateCartUI();
        this.showToast("Добавлено в корзину");
    },

    removeFromCart: function (tId) {
        this.cart = this.cart.filter(x => String(x.tId) !== String(tId));
        this.updateCartUI();
    },

    updateCartUI: function () {
        document.getElementById("headerCartCount").innerText = this.cart.length;
        const html = this.cart.length
            ? this.cart.map(i => `<div class="cart-item"><div><div>${this.escapeHTML(i.name)}</div><div class="cart-item-price">${Number(i.price || 0).toLocaleString()} ₸</div></div><button class="cart-remove" type="button" onclick="app.removeFromCart('${i.tId}')">×</button></div>`).join("")
            : '<p class="cart-empty">Пусто</p>';
        document.getElementById("cartItemsList").innerHTML = html;
        let total = this.cart.reduce((a, b) => a + Number(b.price || 0), 0);
        if (this.isVip) {
            total *= 0.8;
            document.getElementById("cartVipLine").style.display = "flex";
            document.getElementById("cartDiscount").innerText = "−20%";
        } else {
            document.getElementById("cartVipLine").style.display = "none";
        }
        document.getElementById("cartTotal").innerText = total.toLocaleString() + " ₸";
        document.querySelectorAll(".final-price").forEach(e => e.innerText = total.toLocaleString() + " ₸");
    },

    toggleCart: function () {
        this.closeNav();
        document.getElementById("cartModal").classList.toggle("active");
    },

    openCheckout: function () {
        if (!this.cart.length) return this.showToast("Корзина пуста");
        if (!this.user) return this.openAccount();
        this.toggleCart();
        document.getElementById("checkoutModal").classList.add("active");
        document.getElementById("stepContacts").classList.add("active");
        document.getElementById("stepPayment").classList.remove("active");
        document.getElementById("stepSuccess").classList.remove("active");
    },

    goToPayment: function () {
        document.getElementById("stepContacts").classList.remove("active");
        document.getElementById("stepPayment").classList.add("active");
    },

    backToContacts: function () {
        document.getElementById("stepPayment").classList.remove("active");
        document.getElementById("stepContacts").classList.add("active");
    },

    selectPayment: function (type, btn) {
        this.currentPaymentMethod = type === "card" ? "Банковская карта" : (type === "kaspi" ? "Kaspi QR" : "Halyk QR");
        document.querySelectorAll(".pay-opt").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("payContentCard").style.display = type === "card" ? "block" : "none";
        document.getElementById("payContentQR").style.display = type !== "card" ? "block" : "none";
        if (type !== "card") {
            document.getElementById("qrTitle").innerText = type === "kaspi" ? "Kaspi QR" : "Halyk QR";
            document.getElementById("qrImage").src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=KUPER-${type.toUpperCase()}-PAY`;
            setTimeout(() => {
                if (document.getElementById("checkoutModal").classList.contains("active")) this.finishPayment();
            }, 4000);
        }
    },

    processPayment: function (btn) {
        btn.innerText = "Обработка...";
        setTimeout(() => { this.finishPayment(); btn.innerHTML = 'Оплатить <span class="final-price"></span>'; this.updateCartUI(); }, 2000);
    },

    finishPayment: function () {
        this.saveOrder();
        const date = new Date().toLocaleString("ru-RU");
        const orderId = Math.floor(Math.random() * 1000000000);

        const rawTotal = this.cart.reduce((a, b) => a + Number(b.price || 0), 0);
        const discount = this.isVip ? rawTotal * 0.2 : 0;
        const finalTotal = rawTotal - discount;

        let itemsHtml = "";
        this.cart.forEach(i => {
            itemsHtml += `<div class="receipt-row"><span>${this.escapeHTML(i.name)}</span><span>${Number(i.price || 0).toLocaleString()}</span></div>`;
        });

        const pricingHtml = this.isVip
            ? `<div class="receipt-row"><span>Подытог:</span><span>${rawTotal.toLocaleString()}</span></div><div class="receipt-row"><span>Доступ KUPER:</span><span>-${discount.toLocaleString()}</span></div><div class="receipt-line"></div><div class="receipt-row receipt-bold"><span>ИТОГО:</span><span>${finalTotal.toLocaleString()} ₸</span></div>`
            : `<div class="receipt-row receipt-bold"><span>ИТОГО:</span><span>${finalTotal.toLocaleString()} ₸</span></div>`;

        document.getElementById("receiptPlace").innerHTML = `
            <div class="receipt-container">
                <div class="receipt-header"><h2>KUPER</h2><p>БИН 240540008899</p><p>г. Астана, ул. Туран 42</p><p class="receipt-bold">ЧЕК №${orderId}</p></div>
                <div class="receipt-line"></div>${itemsHtml}<div class="receipt-line"></div>${pricingHtml}<div class="receipt-line"></div>
                <div class="receipt-row"><span>Оплата:</span><span>${this.currentPaymentMethod}</span></div>
                <div class="receipt-row"><span>Дата:</span><span>${date}</span></div>
                <div class="receipt-footer"><p>ФИСКАЛЬНЫЙ ЧЕК</p><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=KUPER-CHECK-${orderId}" class="receipt-qr" alt="QR чека"><p>Техника без лишнего.</p></div>
            </div>
        `;
        this.cart = [];
        this.updateCartUI();
        document.getElementById("stepPayment").classList.remove("active");
        document.getElementById("stepSuccess").classList.add("active");
    },

    saveOrder: async function () {
        if (!this.user || !this.token) return;
        try { await fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.token}` }, body: JSON.stringify({ items: this.cart.map(item => ({ id: item.id, name: item.name, price: item.price, quantity: 1 })), paymentMethod: this.currentPaymentMethod }) }); } catch { /* Чек остаётся доступен, если соединение пропало */ }
    },

    checkLoyalty: function () {
        const value = document.getElementById("contractInput").value.toUpperCase();
        if (value.startsWith("KP")) {
            this.isVip = true;
            document.getElementById("loyaltySuccess").style.display = "block";
            this.updateCartUI();
            this.showToast("Доступ KUPER активирован");
        } else {
            this.showToast("Код должен начинаться на KP");
        }
    },

    renderReviews: function () {
        document.getElementById("reviewsList").innerHTML = initialReviews.map(r => this.createReviewHTML(r)).join("");
    },

    createReviewHTML: function (r) {
        const imgHTML = r.photo
            ? `<img src="${this.escapeHTML(r.photo)}" class="review-img-preview" alt="" onclick="window.open('${this.escapeHTML(r.photo)}')">`
            : "";
        return `<article class="review-card">
            <div class="review-head"><div class="stars">${this.escapeHTML(r.rating)}</div><span class="review-product">${this.escapeHTML(r.product)}</span></div>
            <p class="review-text">«${this.escapeHTML(r.text)}»</p>
            ${imgHTML}
            <div class="review-user"><div class="review-avatar">${this.escapeHTML(r.name[0] || "?")}</div><div>${this.escapeHTML(r.name)}</div></div>
        </article>`;
    },

    populateProductSelect: function () {
        const select = document.getElementById("revProduct");
        if (!select) return;
        select.innerHTML = '<option disabled selected value="">Выберите товар</option>';
        db.forEach(p => {
            const o = document.createElement("option");
            o.value = p.name;
            o.innerText = p.name;
            select.appendChild(o);
        });
    },

    handleFileSelect: function (input) {
        if (input.files[0]) document.getElementById("fileName").innerText = input.files[0].name;
    },

    submitReview: function (e) {
        e.preventDefault();
        const name = document.getElementById("revName").value;
        const prod = document.getElementById("revProduct").value;
        const text = document.getElementById("revText").value;
        const rating = document.getElementById("revRating").value;
        const file = document.getElementById("revPhoto").files[0];
        initialReviews.unshift({ name, product: prod, rating, text, photo: file ? URL.createObjectURL(file) : "" });
        this.renderReviews();
        e.target.reset();
        document.getElementById("fileName").innerText = "Прикрепить фото";
        this.showToast("Отзыв опубликован");
    },

    openAddProductModal: function () {
        document.getElementById("addProductModal").classList.add("active");
    },

    submitNewProduct: function (e) {
        e.preventDefault();
        const name = document.getElementById("newProdName").value.trim();
        const cat = document.getElementById("newProdCat").value;
        const price = parseInt(document.getElementById("newProdPrice").value, 10);
        const image = document.getElementById("newProdImage").value.trim();
        const desc = document.getElementById("newProdDesc").value.trim();
        const specs = this.specsFromText(document.getElementById("newProdSpecs").value);

        if (!name || !cat || !price || !image) return this.showToast("Заполните название, категорию, цену и фото");

        db.push({
            id: Date.now(),
            name,
            category: cat,
            price,
            oldPrice: null,
            image,
            badge: "NEW",
            desc,
            specs
        });

        this.saveDb();
        this.currentFilter = "all";
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        document.querySelector(".filter-btn")?.classList.add("active");
        this.refreshCatalog();
        this.closeModal("addProductModal");
        e.target.reset();
        this.showToast("Товар добавлен");
    },

    openEditProductModal: function (id) {
        const p = this.getProductById(id);
        if (!p) return this.showToast("Товар не найден");
        this.closeModal("productModal");

        document.getElementById("editProdId").value = p.id;
        document.getElementById("editProdName").value = p.name || "";
        document.getElementById("editProdCat").value = p.category || "smart";
        document.getElementById("editProdPrice").value = p.price || "";
        document.getElementById("editProdImage").value = p.image || "";
        document.getElementById("editProdDesc").value = p.desc || "";
        document.getElementById("editProdSpecs").value = this.specsToText(p.specs || {});
        document.getElementById("editPhotoName").innerText = "URL или файл";
        document.getElementById("editProdPhotoFile").value = "";
        document.getElementById("editPhotoPreview").src = this.getProductImage(p);
        document.getElementById("editProductModal").classList.add("active");
    },

    previewEditProductPhoto: function (input) {
        const file = input.files && input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            document.getElementById("editPhotoPreview").src = reader.result;
            document.getElementById("editPhotoName").innerText = file.name;
        };
        reader.readAsDataURL(file);
    },

    getSelectedEditPhoto: function () {
        const fileInput = document.getElementById("editProdPhotoFile");
        const file = fileInput.files && fileInput.files[0];
        if (!file) return Promise.resolve(document.getElementById("editProdImage").value.trim());

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error("Не удалось прочитать фото"));
            reader.readAsDataURL(file);
        });
    },

    submitEditProduct: async function (e) {
        e.preventDefault();
        const id = document.getElementById("editProdId").value;
        const p = this.getProductById(id);
        if (!p) return this.showToast("Товар не найден");

        const newPrice = parseInt(document.getElementById("editProdPrice").value, 10);
        if (!newPrice || newPrice < 0) return this.showToast("Цена указана неверно");

        let selectedImage = "";
        try {
            selectedImage = await this.getSelectedEditPhoto();
        } catch (err) {
            return this.showToast(err.message);
        }

        p.name = document.getElementById("editProdName").value.trim() || p.name;
        p.category = document.getElementById("editProdCat").value;
        p.price = newPrice;
        p.image = selectedImage || p.image || PRODUCT_IMAGE_PLACEHOLDER;
        p.desc = document.getElementById("editProdDesc").value.trim();
        p.specs = this.specsFromText(document.getElementById("editProdSpecs").value);

        this.cart = this.cart.map(item => String(item.id) === String(p.id) ? { ...item, ...p, tId: item.tId } : item);
        this.saveDb();
        this.refreshCatalog();
        this.closeModal("editProductModal");
        e.target.reset();
        document.getElementById("editProdPhotoFile").value = "";
        this.showToast("Товар обновлён");
    },

    deleteProduct: function (id) {
        const p = this.getProductById(id);
        if (!p) return this.showToast("Товар не найден");
        const ok = confirm(`Удалить товар «${p.name}»?`);
        if (!ok) return;

        const index = db.findIndex(x => String(x.id) === String(id));
        if (index !== -1) db.splice(index, 1);
        this.cart = this.cart.filter(item => String(item.id) !== String(id));
        this.saveDb();
        this.closeModal("productModal");
        this.closeModal("editProductModal");
        this.refreshCatalog();
        this.showToast("Товар удалён");
    },

    saveDb: function () {
        localStorage.setItem("kuper_db", JSON.stringify(db));
    },

    loadDb: function () {
        const saved = localStorage.getItem("kuper_db") || localStorage.getItem("ds_db");
        if (!saved) return;
        try {
            const parsed = JSON.parse(saved);
            const savedById = new Map(parsed.map(product => [String(product.id), product]));
            const currentProducts = defaultProducts.map(product => savedById.get(String(product.id)) || product);
            parsed.forEach(product => { if (!defaultProducts.some(defaultProduct => String(defaultProduct.id) === String(product.id))) currentProducts.push(product); });
            db.length = 0;
            currentProducts.forEach(p => db.push(p));
        } catch (err) {
            console.warn("Не удалось загрузить каталог из localStorage", err);
        }
    },

    showToast: function (msg) {
        const t = document.createElement("div");
        t.className = "toast";
        t.innerText = msg;
        document.body.appendChild(t);
        setTimeout(() => { t.classList.add("show"); }, 10);
        setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 3000);
    }
};

window.app = app;
window.onload = () => app.init();

document.addEventListener("click", function (event) {
    const target = event.target.closest("[data-click]");
    if (!target) return;
    event.preventDefault();
    Function("event", "element", target.dataset.click).call(target, event, target);
});

document.addEventListener("submit", function (event) {
    const target = event.target.closest("[data-submit]");
    if (!target) return;
    Function("event", "element", target.dataset.submit).call(target, event, target);
});

document.addEventListener("change", function (event) {
    const target = event.target.closest("[data-change]");
    if (!target) return;
    Function("event", "element", target.dataset.change).call(target, event, target);
});

document.addEventListener("input", function (event) {
    const target = event.target.closest("[data-input]");
    if (!target) return;
    Function("event", "element", target.dataset.input).call(target, event, target);
});
