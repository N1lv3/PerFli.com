// Плавный переход назад
window.addEventListener('popstate', function(event) {
    window.scrollTo(0, 0);
});
document.addEventListener('DOMContentLoaded', function() {
    const numParticles = 100; // Количество частиц
    const container = document.body;
    for (let i = 0; i < numParticles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const size = Math.random() * 5 + 2; // Размер частиц
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        // Устанавливаем случайные позиции
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        // Устанавливаем случайную анимацию
        sparkle.style.animationDuration = Math.random() * 2 + 1 + 's'; // Случайная продолжительность анимации
        sparkle.style.animationDelay = Math.random() * 5 + 's'; // Случайная задержка анимации
        container.appendChild(sparkle);
    }
});
 
function toggleReviewForm(productId) {
    const reviewForm = document.getElementById(`review-form-${productId}`);
    reviewForm.style.display = reviewForm.style.display === 'none' ? 'block' : 'none';
}
function submitReview(productId) {
    const reviewInput = document.querySelector(`#review-form-${productId} textarea`);
    const reviewText = reviewInput.value;
    if (reviewText) {
        const reviewsList = document.getElementById(`reviews-list-${productId}`);
        const newReview = document.createElement('div');
        newReview.textContent = reviewText;
        reviewsList.appendChild(newReview);
        reviewInput.value = ''; // Очистить поле ввода
    } else {
        alert('Пожалуйста, введите отзыв.');
    }
}



const products = [
    {
        id: 1,
        name: "Mosai",
        description: " Mosaïque — это аромат, созданный для тех, кто ценит многогранность и глубину.  Его композиция  сочетает в себе неожиданные и гармонично сплетенные ноты,  создавая  запоминающийся и  индивидуальный шлейф.",
        notes: {
            top: ["бергамот", "лимон"],
            middle: ["жасмин", "роза"],
            base: ["мускус", "сандал"]
        },
        price: 3500,
        volume: "100 мл",
        image: "/images/5.jpg", // Укажите путь к изображению
        category: "new"
    },
    {
        id: 2,
        name: "Mystic aura ",
        description: "Mystic Aura — это таинственный и завораживающий аромат, окутывающий чувственным шлейфом.  Его магическая композиция пробуждает  чувственность и  уверенность в себе.",
        notes: {
            top: ["апельсин", "мандарин"],
            middle: ["ваниль", "пачули"],
            base: ["кедр", "амбра"]
        },
        price: 4500,
        volume: "50 мл",
        image: "/images/1.jpg", // Укажите путь к изображению
        category: "bestseller"
    },
    {
        id: 3,
        name: "Crystalline",
        description: " Crystalline — это чистый, сверкающий и свежий аромат,  словно хрустальный родник.  Он излучает  легкость, нежность и  элегантность.",
        notes: {
            top: ["грейпфрут", "мандарин"],
            middle: ["роза", "лилия"],
            base: ["мускус", "пачули"]
        },
        price: 3200,
        volume: "75 мл",
        image: "/images/2.jpg", // Укажите путь к изображению
        category: "new"
    },
    {
        id: 4,
        name: "Strong ambition",
        description: " Strong Ambition — это мощный и уверенный аромат, отражающий целеустремленность и  несокрушимую силу духа.  Его  композиция  символизирует  успех и  достижение  высоких целей.",
        notes: {
            top: ["персик", "груша"],
            middle: ["жасмин", "магнолия"],
            base: ["сандал", "амбра"]
        },
        price: 2800,
        volume: "30 мл",
        image: "/images/3.jpg", // Укажите путь к изображению
        category: "new"
    },
    {
        id: 5,
        name: "Lamlos",
        description: " Lamlos — это загадочный и соблазнительный аромат, играющий на контрастах и скрытых гранях.  Его чувственная композиция  окутывает  таинственностью и  привлекает внимание.",
        notes: {
            top: ["бергамот", "мирт"],
            middle: ["жасмин", "гардения"],
            base: ["мускус", "амбровое дерево"]
        },
        price: 5000,
        volume: "10 мл",
        image: "/images/6.jpg", // Укажите путь к изображению
        category: "bestseller"
    },
    {
        id: 6,
        name: "Strength",
        description: " Strength — это энергичный и уверенный аромат, воплощающий силу и решительность.  Его композиция  наполняет  силой и  вдохновляет на  новые свершения.",
        notes: {
            top: ["мандарин", "грейпфрут"],
            middle: ["кедр", "ваниль"],
            base: ["сандал", "амбра"]
        },
        price: 4200,
        volume: "75 мл",
        image: "/images/4.jpg", // Укажите путь к изображению
        category: "new"
    },
];
function renderProducts(sortedProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Очистить список перед рендерингом
    sortedProducts.forEach(product => {
        const newLabel = product.category === "new" ? '<div class="new">Новинка</div>' : '';
        const bestsellerLabel = product.category === "bestseller" ? '<div class="bestseller">Бестселлер</div>' : '';
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            ${newLabel}
            ${bestsellerLabel}
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Цена: ${product.price} руб.</p>
            <p>Объем: ${product.volume}</p>
            <button class="buy-button">Купить</button>
        `;
        productList.appendChild(productDiv);
    });
}
function sortProducts(criteria) {
    let sortedProducts;
    if (criteria === "price-asc") {
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (criteria === "price-desc") {
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else {
        sortedProducts = products; // Если другие критерии не реализованы
    }
    renderProducts(sortedProducts);
}
document.getElementById('sort').addEventListener('change', (event) => {
    sortProducts(event.target.value);
});
// Изначально отображаем продукты
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});