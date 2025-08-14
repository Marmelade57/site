import { items } from "../model/liste_items_menu.js";

// génère le menu à partir de items

let menu = document.querySelector("aside");
let liste = menu.querySelector("ul");

items.forEach(valeur => {
    let id = valeur[1].split("/")[2].match(".html") ? valeur[1].split("/")[2].split(".html")[0] : valeur[1].split("/")[2];
    liste.innerHTML += "<a href='"+valeur[1]+"' id='"+id+"'><li>"+valeur[0]+"</li></a>"
});