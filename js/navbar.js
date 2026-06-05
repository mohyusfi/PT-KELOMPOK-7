document.addEventListener("DOMContentLoaded", () => {
    const checkBox = document.querySelector("nav .nav-container .button-menu #button-menu")
    const listMenu = document.querySelector("nav .nav-container ul")
    if(checkBox instanceof HTMLInputElement) {
        checkBox.addEventListener('change', () => {
            checkBox.checked ? listMenu.classList.add("show") : listMenu.classList.remove("show")
        })
    }
})