document.addEventListener("DOMContentLoaded", () => {
    const checkBox = document.querySelector("nav .nav-container .button-menu #button-menu");
    const listMenu = document.querySelector("nav .nav-container ul");
    const menuLinks = document.querySelectorAll("nav .nav-container ul li a");

    const getPageName = (pathname) => {
        const pageName = pathname.split("/").pop();
        return pageName || "index.html";
    };

    const getActiveTarget = () => {
        const currentPage = getPageName(window.location.pathname);

        if (currentPage === "index.html") {
            return window.location.hash === "#contactus" ? "#contactus" : "#home";
        }

        return currentPage;
    };

    const setActiveMenu = () => {
        const activeTarget = getActiveTarget();

        menuLinks.forEach((link) => {
            const linkUrl = new URL(link.getAttribute("href"), window.location.href);
            const linkPage = getPageName(linkUrl.pathname);
            const linkTarget = linkPage === "index.html" ? linkUrl.hash || "#home" : linkPage;
            const isActive = linkTarget === activeTarget;

            link.classList.toggle("nav-link-active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    setActiveMenu();
    window.addEventListener("hashchange", setActiveMenu);

    if (checkBox instanceof HTMLInputElement && listMenu instanceof HTMLUListElement) {
        checkBox.addEventListener('change', () => {
            checkBox.checked ? listMenu.classList.add("show") : listMenu.classList.remove("show");
        });

        menuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                checkBox.checked = false;
                listMenu.classList.remove("show");
                setTimeout(setActiveMenu, 0);
            });
        });
    }
});
