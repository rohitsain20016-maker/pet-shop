/* =========================================
   PAWLUX PRODUCT DATA
========================================= */

const products = [
    {
        id: 1,
        name: "Luxury Orthopedic Dog Bed",
        category: "Dogs",
        price: 89,
        oldPrice: 119,
        rating: 5,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
        description: "A premium orthopedic bed designed to provide maximum comfort and support for your dog's joints."
    },
    {
        id: 2,
        name: "Premium Cat Scratcher",
        category: "Cats",
        price: 49,
        oldPrice: 65,
        rating: 5,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80",
        description: "A stylish and durable scratcher that keeps your cat entertained while protecting your furniture."
    },
    {
        id: 3,
        name: "Healthy Grain-Free Pet Food",
        category: "Food",
        price: 39,
        oldPrice: 49,
        rating: 5,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
        description: "Nutritious grain-free food made with quality ingredients for healthy and happy pets."
    },
    {
        id: 4,
        name: "Interactive Rope Toy",
        category: "Toys",
        price: 24,
        oldPrice: 32,
        rating: 4,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=800&q=80",
        description: "An interactive rope toy designed for fun, exercise and bonding with your dog."
    },
    {
        id: 5,
        name: "Natural Grooming Kit",
        category: "Grooming",
        price: 55,
        oldPrice: 70,
        rating: 5,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
        description: "A complete grooming kit with premium tools for keeping your pet clean and comfortable."
    },
    {
        id: 6,
        name: "Premium Leather Pet Collar",
        category: "Accessories",
        price: 34,
        oldPrice: 45,
        rating: 5,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
        description: "Elegant premium leather collar combining comfort, durability and timeless style."
    },
    {
        id: 7,
        name: "Luxury Cat Toy",
        category: "Cats",
        price: 29,
        oldPrice: 39,
        rating: 4,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
        description: "Fun and engaging toy designed to stimulate your cat's natural instincts."
    },
    {
        id: 8,
        name: "Premium Puppy Food",
        category: "Food",
        price: 45,
        oldPrice: 55,
        rating: 5,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
        description: "Balanced nutrition specially designed to support growing puppies."
    },
    {
        id: 9,
        name: "Cozy Pet House",
        category: "Dogs",
        price: 75,
        oldPrice: 95,
        rating: 5,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
        description: "A cozy premium pet house that gives your pet a private place to relax."
    },
    {
        id: 10,
        name: "Elegant Pet Bowl",
        category: "Accessories",
        price: 27,
        oldPrice: 35,
        rating: 4,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
        description: "Elegant feeding bowl with a stylish design suitable for modern homes."
    },
    {
        id: 11,
        name: "Soft Pet Blanket",
        category: "Dogs",
        price: 42,
        oldPrice: 58,
        rating: 5,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80",
        description: "Ultra-soft blanket that provides warmth and comfort for your pet."
    },
    {
        id: 12,
        name: "Premium Cat Bed",
        category: "Cats",
        price: 69,
        oldPrice: 89,
        rating: 5,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80",
        description: "A luxurious sleeping space made especially for cats who love comfort."
    },
    {
        id: 13,
        name: "Pet Dental Chew",
        category: "Food",
        price: 18,
        oldPrice: 24,
        rating: 4,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?auto=format&fit=crop&w=800&q=80",
        description: "Tasty dental chews that support oral hygiene while keeping your pet happy."
    },
    {
        id: 14,
        name: "Premium Pet Shampoo",
        category: "Grooming",
        price: 22,
        oldPrice: 29,
        rating: 5,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
        description: "Gentle premium shampoo for clean, soft and healthy-looking coats."
    },
    {
        id: 15,
        name: "Smart Interactive Ball",
        category: "Toys",
        price: 35,
        oldPrice: 45,
        rating: 5,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=800&q=80",
        description: "Interactive ball that keeps your pet active and mentally stimulated."
    },
    {
        id: 16,
        name: "Luxury Pet Harness",
        category: "Accessories",
        price: 46,
        oldPrice: 60,
        rating: 5,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
        description: "Comfortable luxury harness designed for safe and stylish walks."
    }
];


/* =========================================
   LOCAL STORAGE
========================================= */

let cart = JSON.parse(localStorage.getItem("pawluxCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("pawluxWishlist")) || [];


/* =========================================
   DOM HELPERS
========================================= */

const $ = selector => document.querySelector(selector);

function saveCart() {
    localStorage.setItem("pawluxCart", JSON.stringify(cart));
}

function saveWishlist() {
    localStorage.setItem("pawluxWishlist", JSON.stringify(wishlist));
}


/* =========================================
   TOAST
========================================= */

function showToast(message) {
    const toast = $("#toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


/* =========================================
   PRODUCT CARD
========================================= */

function productCard(product) {

    const isWishlisted = wishlist.includes(product.id);

    return `
        <article class="product-card">

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}">

                <span class="badge">${product.badge}</span>

                <button
                    class="wishlist ${isWishlisted ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                    aria-label="Wishlist">
                    ${isWishlisted ? "♥" : "♡"}
                </button>

            </div>

            <div class="product-info">

                <span class="product-category">${product.category}</span>

                <h3>
                    <a href="product.html?id=${product.id}">
                        ${product.name}
                    </a>
                </h3>

                <div class="rating">
                    ${"⭐".repeat(product.rating)}
                </div>

                <div class="price">
                    <strong>$${product.price}</strong>
                    <del>$${product.oldPrice}</del>
                </div>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})">
                    Add To Cart
                </button>

            </div>

        </article>
    `;
}


/* =========================================
   HOME PRODUCTS
========================================= */

function renderFeaturedProducts() {

    const container = $("#featuredProducts");

    if (!container) return;

    container.innerHTML = products
        .slice(0, 8)
        .map(productCard)
        .join("");
}


/* =========================================
   SHOP
========================================= */

let visibleProducts = 8;

function renderShopProducts() {

    const container = $("#shopProducts");

    if (!container) return;

    let filtered = [...products];

    const search = $("#searchInput")?.value.toLowerCase().trim();
    const category = $("#categoryFilter")?.value || "All";
    const sort = $("#sortProducts")?.value || "default";

    if (search) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search)
        );
    }

    if (category !== "All") {
        filtered = filtered.filter(product =>
            product.category === category
        );
    }

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    const visible = filtered.slice(0, visibleProducts);

    container.innerHTML = visible.length
        ? visible.map(productCard).join("")
        : `<div class="empty-cart">No products found.</div>`;

    const loadMore = $("#loadMore");

    if (loadMore) {
        loadMore.style.display =
            visible.length < filtered.length ? "inline-flex" : "none";
    }
}


/* =========================================
   CATEGORY URL
========================================= */

function readCategoryFromURL() {

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    const filter = $("#categoryFilter");

    if (category && filter) {
        filter.value = category;
    }
}


/* =========================================
   CART
========================================= */

function addToCart(id) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            quantity: 1
        });
    }

    saveCart();
    updateCart();

    showToast(`${product.name} added to cart 🛒`);
}


function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();
    updateCart();
}


function changeQuantity(id, amount) {

    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }

    saveCart();
    updateCart();
}


function updateCart() {

    const count = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartCount = $("#cartCount");

    if (cartCount) {
        cartCount.textContent = count;
    }

    const wishlistCount = $("#wishlistCount");

    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }

    const cartItems = $("#cartItems");
    const cartTotal = $("#cartTotal");

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <div style="font-size:45px">🛒</div>
                <p>Your cart is empty.</p>
                <a href="shop.html" class="text-link">
                    Start Shopping →
                </a>
            </div>
        `;

        cartTotal.textContent = "$0.00";
        return;
    }

    let total = 0;

    cartItems.innerHTML = cart.map(item => {

        const product = products.find(p => p.id === item.id);

        if (!product) return "";

        total += product.price * item.quantity;

        return `
            <div class="cart-item">

                <img src="${product.image}" alt="${product.name}">

                <div>
                    <h4>${product.name}</h4>
                    <p>$${product.price}</p>

                    <div class="qty">
                        <button onclick="changeQuantity(${product.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${product.id}, 1)">+</button>
                    </div>
                </div>

                <button
                    class="remove"
                    onclick="removeFromCart(${product.id})">
                    ×
                </button>

            </div>
        `;

    }).join("");

    cartTotal.textContent = `$${total.toFixed(2)}`;
}


/* =========================================
   CART SIDEBAR
========================================= */

function openCart() {

    $("#cartSidebar")?.classList.add("active");
    $("#cartOverlay")?.classList.add("active");

    updateCart();
}


function closeCart() {

    $("#cartSidebar")?.classList.remove("active");
    $("#cartOverlay")?.classList.remove("active");
}


/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(id) {

    const index = wishlist.indexOf(id);

    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Removed from wishlist");
    } else {
        wishlist.push(id);
        showToast("Added to wishlist ❤️");
    }

    saveWishlist();
    updateCart();

    renderFeaturedProducts();
    renderShopProducts();
    renderRelatedProducts();
}


/* =========================================
   PRODUCT DETAILS
========================================= */

function renderProductDetails() {

    const container = $("#productDetails");

    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id")) || 1;

    const product = products.find(p => p.id === id);

    if (!product) {

        container.innerHTML = `
            <div class="empty-cart">
                <h2>Product Not Found</h2>
                <a href="shop.html" class="btn">
                    Back To Shop
                </a>
            </div>
        `;

        return;
    }

    document.title = `${product.name} | PawLux`;

    const isWishlisted = wishlist.includes(product.id);

    container.innerHTML = `

        <div class="detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="detail-info">

            <span class="eyebrow">${product.category}</span>

            <h1>${product.name}</h1>

            <div class="rating">
                ${"⭐".repeat(product.rating)}
                <span> (${product.rating}.0)</span>
            </div>

            <div class="detail-price">
                $${product.price}
                <del style="font-size:17px;color:var(--muted)">
                    $${product.oldPrice}
                </del>
            </div>

            <p>${product.description}</p>

            <div class="detail-actions">

                <button
                    class="btn"
                    onclick="addToCart(${product.id})">
                    Add To Cart 🛒
                </button>

                <button
                    class="btn btn-outline"
                    onclick="toggleWishlist(${product.id})">
                    ${isWishlisted ? "♥ Wishlisted" : "♡ Wishlist"}
                </button>

            </div>

            <div style="margin-top:30px;color:var(--muted)">
                <p>✓ Premium quality materials</p>
                <p>✓ Fast & secure delivery</p>
                <p>✓ Customer satisfaction guaranteed</p>
            </div>

        </div>
    `;
}


function renderRelatedProducts() {

    const container = $("#relatedProducts");

    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id")) || 1;

    const current = products.find(p => p.id === id);

    if (!current) return;

    const related = products
        .filter(p => p.category === current.category && p.id !== id)
        .slice(0, 4);

    container.innerHTML = related.map(productCard).join("");
}


/* =========================================
   THEME
========================================= */

function setupTheme() {

    const themeBtn = $("#themeBtn");

    const savedTheme = localStorage.getItem("pawluxTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    if (!themeBtn) return;

    themeBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "pawluxTheme",
            dark ? "dark" : "light"
        );

        themeBtn.textContent = dark ? "☀️" : "🌙";
    });
}


/* =========================================
   MOBILE MENU
========================================= */

function setupMobileMenu() {

    const menuBtn = $("#menuBtn");
    const navLinks = $("#navLinks");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });
}


/* =========================================
   COUNTDOWN
========================================= */

function countdown() {

    const secondsElement = $("#seconds");

    if (!secondsElement) return;

    let endTime = localStorage.getItem("pawluxCountdown");

    if (!endTime) {

        endTime =
            Date.now() +
            2 * 24 * 60 * 60 * 1000 +
            12 * 60 * 60 * 1000;

        localStorage.setItem(
            "pawluxCountdown",
            endTime
        );
    }

    function update() {

        const remaining =
            Math.max(0, Number(endTime) - Date.now());

        const totalSeconds =
            Math.floor(remaining / 1000);

        const days =
            Math.floor(totalSeconds / 86400);

        const hours =
            Math.floor((totalSeconds % 86400) / 3600);

        const minutes =
            Math.floor((totalSeconds % 3600) / 60);

        const seconds =
            totalSeconds % 60;

        $("#days").textContent =
            String(days).padStart(2, "0");

        $("#hours").textContent =
            String(hours).padStart(2, "0");

        $("#minutes").textContent =
            String(minutes).padStart(2, "0");

        $("#seconds").textContent =
            String(seconds).padStart(2, "0");
    }

    update();

    setInterval(update, 1000);
}


/* =========================================
   CONTACT FORM
========================================= */

function setupContactForm() {

    const form = $("#contactForm");

    if (!form) return;

    form.addEventListener("submit", event => {

        event.preventDefault();

        showToast(
            "Thank you! Your message has been sent successfully. 🐾"
        );

        form.reset();
    });
}


/* =========================================
   NEWSLETTER
========================================= */

function setupNewsletter() {

    const form = $("#newsletterForm");

    if (!form) return;

    form.addEventListener("submit", event => {

        event.preventDefault();

        showToast(
            "Welcome to the PawLux family! 💚"
        );

        form.reset();
    });
}


/* =========================================
   CHECKOUT
========================================= */

function setupCheckout() {

    const checkout = $("#checkoutBtn");

    if (!checkout) return;

    checkout.addEventListener("click", () => {

        if (cart.length === 0) {
            showToast("Your cart is empty.");
            return;
        }

        showToast(
            "Demo checkout activated! Thank you for shopping with PawLux 🐾"
        );
    });
}


/* =========================================
   STATS ANIMATION
========================================= */

function setupStats() {

    const stats = document.querySelectorAll("[data-stat]");

    if (!stats.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const element = entry.target;
            const target = Number(element.dataset.stat);

            let current = 0;
            const increment = target / 50;

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }

                element.textContent =
                    target % 1 === 0
                        ? Math.floor(current).toLocaleString()
                        : current.toFixed(1);

            }, 25);

            observer.unobserve(element);
        });

    }, { threshold: .5 });

    stats.forEach(stat => observer.observe(stat));
}


/* =========================================
   SHOP CONTROLS
========================================= */

function setupShopControls() {

    const search = $("#searchInput");
    const category = $("#categoryFilter");
    const sort = $("#sortProducts");
    const loadMore = $("#loadMore");

    if (search) {
        search.addEventListener("input", () => {
            visibleProducts = 8;
            renderShopProducts();
        });
    }

    if (category) {
        category.addEventListener("change", () => {
            visibleProducts = 8;
            renderShopProducts();
        });
    }

    if (sort) {
        sort.addEventListener("change", () => {
            renderShopProducts();
        });
    }

    if (loadMore) {
        loadMore.addEventListener("click", () => {
            visibleProducts += 4;
            renderShopProducts();
        });
    }
}


/* =========================================
   CART BUTTONS
========================================= */

function setupCart() {

    $("#cartBtn")?.addEventListener("click", openCart);

    $("#closeCart")?.addEventListener("click", closeCart);

    $("#cartOverlay")?.addEventListener("click", closeCart);
}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    setupTheme();
    setupMobileMenu();
    setupCart();
    setupCheckout();

    setupContactForm();
    setupNewsletter();

    setupShopControls();
    setupStats();

    readCategoryFromURL();

    renderFeaturedProducts();
    renderShopProducts();

    renderProductDetails();
    renderRelatedProducts();

    updateCart();

    countdown();
});