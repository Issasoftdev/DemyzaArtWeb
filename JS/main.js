const menuBtn = document.getElementById("menuBtn");
const menuExitBtn = document.getElementById("menuExitBtn");
const portfolioMenu = document.getElementById("portfolioMenu");
const header = document.getElementById("header");
const graphicDesignMenuButton = document.getElementById("graphicDesignMenu");
const graphicSubMenu = document.getElementById("graphicSubMenu");

function openMenu() {
    portfolioMenu.classList.remove("hidden");
    menuBtn.classList.add("hidden"); 
};

function closeMenu() {
    portfolioMenu.classList.add("hidden");
    menuBtn.classList.remove("hidden"); 
};

function openGraphicMenu() {
    if (graphicSubMenu.classList.contains("hidden")) {
        graphicSubMenu.classList.remove("hidden");
    } else {
        graphicSubMenu.classList.add("hidden");
    } 
}

menuBtn.addEventListener('click', openMenu);
menuExitBtn.addEventListener('click', closeMenu);
graphicDesignMenuButton.addEventListener('click', openGraphicMenu);