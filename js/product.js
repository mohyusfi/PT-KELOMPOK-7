document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelector("#product-tabs");
    const grid = document.querySelector("#product-grid");

    if (!tabs || !grid) {
        return;
    }

    const createProductCard = (product) => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.dataset.category = product.category;

        const imageWrap = document.createElement("div");
        imageWrap.className = "product-image";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";
        imageWrap.appendChild(image);

        const category = document.createElement("span");
        category.className = "product-category";
        category.textContent = product.categoryLabel;

        const title = document.createElement("h3");
        title.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = product.description;

        const price = document.createElement("strong");
        price.textContent = product.price;

        card.append(imageWrap, category, title, description, price);
        return card;
    };

    const showCategory = (category) => {
        tabs.querySelectorAll("[data-category-button]").forEach((button) => {
            button.classList.toggle("active", button.dataset.categoryButton === category);
        });

        grid.querySelectorAll("[data-category]").forEach((card) => {
            card.classList.toggle("hidden", card.dataset.category !== category);
        });
    };

    const renderProducts = ({ categories, products }) => {
        const categoryNameById = new Map(categories.map((category) => [category.id, category.name]));

        tabs.innerHTML = "";
        grid.innerHTML = "";

        categories.forEach((category) => {
            const button = document.createElement("button");
            button.type = "button";
            button.dataset.categoryButton = category.id;
            button.textContent = category.name;
            button.addEventListener("click", () => showCategory(category.id));
            tabs.appendChild(button);
        });

        products.forEach((product) => {
            grid.appendChild(createProductCard({
                ...product,
                categoryLabel: categoryNameById.get(product.category) || product.category
            }));
        });

        if (categories.length > 0) {
            showCategory(categories[0].id);
        }
    };

    fetch("./assets/product.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Data produk tidak bisa dimuat.");
            }

            return response.json();
        })
        .then(renderProducts)
        .catch(() => {
            grid.innerHTML = '<p class="product-empty">Data produk belum tersedia.</p>';
        });
});
