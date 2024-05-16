function toggleMenu() {
    /* Targeting these two elements "menu-links" "hamburger-icon"*/
    const menu =document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    /* When clicked it will add or remove the "open" class in that element. The "open" class has a styling */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}