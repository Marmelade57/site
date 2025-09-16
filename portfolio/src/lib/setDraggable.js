function setDraggable(elements, booleen){
    elements.forEach(element => {
    element.setAttribute("draggable", booleen);
});
}

let images = document.querySelectorAll("img");
let figures = document.querySelectorAll("figure");

setDraggable(images, false);
setDraggable(figures, false);