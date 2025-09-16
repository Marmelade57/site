/**
 * Liste des éléments du menu
 */

class ItemsMenu {
    contenu;
    
    constructor(tableau){
        this.contenu = tableau;
    }
    
    toString(){
        let chaine = "";
        this.contenu.forEach(element => {
            chaine += element[0] + ":'" + element[1] + "',"
        });
        return chaine.slice(0,-1);
    }

    liensToTable(){
        let tableau = [];
        this.contenu.forEach(element => {
            tableau.push(element[1]);
        });
        return tableau;
    }

    titresToTable(){
        let tableau = [];
        this.contenu.forEach(element => {
            tableau.push(element[0]);
        });
        return tableau;
    }

    toTable(){
        let tableau = [];
        this.contenu.forEach(element => {
            tableau.push(element[0],element[1]);
        });
        return tableau;
    }
}

export const items = new ItemsMenu([["Accueil", "/"], ["Études", "/etudes"], ["Fiches", "/fiches"], ["Hobbies", "/passions"], ["Projets", "/projets"], ["Crédits", "/credits"]]);