document.addEventListener("DOMContentLoaded", () => {
    const checkBox = document.querySelector("nav .nav-container .button-menu #button-menu");
    const listMenu = document.querySelector("nav .nav-container ul");
    const menuLinks = document.querySelectorAll("nav .nav-container ul li a");

    if (checkBox instanceof HTMLInputElement && listMenu instanceof HTMLUListElement) {
        checkBox.addEventListener('change', () => {
            checkBox.checked ? listMenu.classList.add("show") : listMenu.classList.remove("show");
        });

        menuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                checkBox.checked = false;
                listMenu.classList.remove("show");
            });
        });
    }
});
