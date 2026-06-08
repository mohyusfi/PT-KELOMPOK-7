document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll("[data-category-button]");
    const productCards = document.querySelectorAll("[data-category]");

    const showCategory = (category) => {
        categoryButtons.forEach((button) => {
            button.classList.toggle("active", button.dataset.categoryButton === category);
        });

        productCards.forEach((card) => {
            card.classList.toggle("hidden", card.dataset.category !== category);
        });
    };

    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            showCategory(button.dataset.categoryButton);
        });
    });

    showCategory("elektronik");
});
