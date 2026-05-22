
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = this.querySelector("input[type='text']");
        const email = this.querySelector("input[type='email']");
        const message = this.querySelector("textarea");

        [name, email, message].forEach(el => el.style.border = "1px solid #ddd");

        let valid = true;

        if (name.value.trim().length < 3) {
            name.style.border = "1px solid red";
            valid = false;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
        if (!email.value.match(emailPattern)) {
            email.style.border = "1px solid red";
            valid = false;
        }

        if (message.value.trim().length < 10) {
            message.style.border = "1px solid red";
            valid = false;
        }

        if (valid) {
            this.innerHTML = "<p style='color:green;'>✔ Poruka je uspešno poslata!</p>";
        }
    });
}


const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image = "slike/default.png") {
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}


const products = [
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina10.png" },
    { name: "Letnja Haljina", price: 4000, category: "haljina", image: "slike/haljina1.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet.png" },
    { name: "Komplet", price: 3500, category: "komplet", image: "slike/komplet1.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet2.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet3.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet4.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet5.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet6.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet7.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet8.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet9.png" },
    
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet11.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet12.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet13.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet14.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet15.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet16.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet17.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet18.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet19.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet20.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet21.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet22.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet23.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet24.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet25.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet26.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet27.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet28.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet29.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet30.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet31.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet32.png" },
    { name: "Komplet", price: 5000, category: "komplet", image: "slike/komplet33.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina10.png" },
    { name: "Letnja Haljina", price: 4000, category: "haljina", image: "slike/haljina1.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina2.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina3.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina4.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina5.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina6.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina7.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina8.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina9.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina11.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina12.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina13.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina14.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina15.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina16.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina17.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina18.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina19.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina20.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina21.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina22.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina23.png" },
    { name: "Haljina", price: 3000, category: "haljina", image: "slike/haljina24.png" },
];


function renderProducts(list) {
    const container = document.getElementById("product-list");
    if (!container) return;

    container.innerHTML = "";

    list.forEach(product => {
        container.innerHTML += `
            <div class="product-card" data-category="${product.category}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price} RSD</p>
                <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">
                    Dodaj u korpu
                </button>
            </div>
        `;
    });
}


const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );

        renderProducts(filtered);
    });
}


function filterProducts(category) {
    const filtered = category === "all"
        ? products
        : products.filter(p => p.category === category);

    renderProducts(filtered);
}


document.addEventListener("DOMContentLoaded", () => {

    updateCartCount();

    const container = document.getElementById("product-list");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const category = params.get("cat");

    if (category) {
        filterProducts(category);
    } else {
        renderProducts(products);
    }
});