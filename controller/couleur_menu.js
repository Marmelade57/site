import { items } from "../model/liste_items_menu.js";

let lienActuel = window.location.href;
colorise(lienActuel)

/**
 * Cherche dans le menu principal (aside) dans quelle page on est actuellement.
 * Exemple : pour le lien vue/etudes/1A.html, Études est colorisé.
 * @param {string} lien Lien à mettre en couleur
 */
function colorise(lien){
    let elementMenu;

    items.forEach((valeur) => {
        elementMenu = valeur[1].split("/")[2];
        elementMenu.match(".html") ? elementMenu = elementMenu.split(".html")[0] : elementMenu = elementMenu;
        lien.match(elementMenu) ?  document.getElementById(elementMenu).style.color = "#a77ec1" : document.getElementById(elementMenu).style.color = "black";
    });
}