let menu = document.querySelector("aside");
let contenuMenu = menu.querySelector("ul");
let contenu = document.querySelector("main");
let section = document.querySelector("section");
let footer = document.querySelector("footer");

let hauteur = document.body.clientHeight;
let largeur = document.body.clientWidth;

menu.querySelector("figure").addEventListener("click", toggleMenu);

/**
 * Gère le statut du menu (déplié ou replié)
*/
function toggleMenu() {
    if (largeur > 900) {
        if (menu.style.width === "6svw" || (menu.style.width === "50px" && menu.style.height === "60px")) {
            menu.style.width = "25svw";
            footer.style.width = "25svw";
            contenuMenu.style.display = "block";
            contenu.style.marginLeft = "25svw";
            contenu.style.width = "75svw";
            section.style.marginInline = "10svw";
        } else {
            menu.style.width = "6svw";
            footer.style.width = "6svw";
            contenuMenu.style.display = "none";
            contenu.style.marginLeft = "6svw";
            contenu.style.width = "94svw";
            section.style.marginInline = "20svw";
        }
    }
    else {
        if (menu.style.width === "6svw" || (menu.style.width === "50px" && menu.style.height === "60px")) {
            menu.style.width = "100svw";
            footer.style.width = "25svw";
            menu.style.height = "100svh";
            contenuMenu.style.display = "block";
            contenu.style.marginLeft = "50px";
            contenu.style.width = "95svw";
        } else {
            menu.style.width = "50px";
            footer.style.width = "50px";
            menu.style.height = "60px";
            contenuMenu.style.display = "none";
            contenu.style.marginLeft = "50px";
            contenu.style.width = "95svw";
        }
    }
}
