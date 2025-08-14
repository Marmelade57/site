// Génère le contenu du sous-menu s'il y a plus d'un article. Sinon, le sous-menu (nav) est caché.

let articles = document.querySelectorAll("article");
let titre1;

let nav = document.querySelector("nav");
liste = nav.querySelector("ul");

if (articles.length > 1){
    for (let index = 0; index < articles.length; index++) {
        titre1 = articles[index].innerHTML.split(">")[1].slice(0,-4);
        liste.innerHTML += "<a href='#t-"+(index+1)+"'><li>"+titre1+"</li></a>";
    }
} else {
    nav.style.display = 'none';
}