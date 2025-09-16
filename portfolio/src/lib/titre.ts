/**
 * 
 * @param chaine Chaine de carractère, titre de la page
 * @param type ["majuscule", "minuscule", "fullMaj"] !!! Indiquer la position dans le tableau
 * @returns chaine de caractère bien formée
 */
export function formatTitre(chaine:string, type?: TypeTraitementChaine):string{
    if (chaine === undefined || chaine === ""){
        throw new Error("La chaine n'est pas définie ou est vide.");
    }
    chaine.includes("/") ? chaine = chaine.split("/")[chaine.split("/").length -1] : "";
    switch (type) {
        case TypeTraitementChaine.minuscule:
            chaine = chaine.toLocaleLowerCase();
            break;
        case TypeTraitementChaine.fullMaj:
            chaine = chaine.toLocaleUpperCase();
            break;
        default:
            chaine= chaine.slice(0,1).toLocaleUpperCase() + chaine.slice(1).toLocaleLowerCase();
            break;
    }
    
    return chaine;
}

export enum TypeTraitementChaine {"majuscule", "minuscule", "fullMaj"}