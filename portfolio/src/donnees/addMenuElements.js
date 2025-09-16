import { items } from "./liste_items_menu.js";

// génère le menu à partir de items

let menu = document.querySelector("aside");
let liste = menu.querySelector("ul");

let lienActuel = window.location.href;
let nombreSousDossier = 0;
let supplementCorrecteurLien = ""

compteSousDossier()

/**
 * Compte le nombre de sous dossiers dans le lien pour corriger dynamiquement la navigation.
 * @example "Dans vue/projets/SAE, il y a un sous-dossier séparant la page actuelle de l'accueil (projets/) donc il faut le prendre en compte dans le menu et ajouter un ../"
 */
function compteSousDossier(){
    let lien = lienActuel.split("vue/")[1];
    nombreSousDossier = lien.split("/").length -1;
    supplementCorrecteurLien = "../".repeat(nombreSousDossier);

    createurLien()
}

/**
 * Corrige les possibles ajouts de .html à la fin du lien.
 * Ajoute les liens du menu dans l'aside.
 */
function createurLien(){
    items.forEach(valeur => {
        let id = valeur[1].split("/")[1].match(".html") ? valeur[1].split("/")[1].split(".html")[0] : valeur[1].split("/")[1];

        liste.innerHTML += "<a href='"+supplementCorrecteurLien+valeur[1]+"' id='"+id+"'><li>"+valeur[0]+"</li></a>"
    });
}