import { compareParents } from "./compareParents.js"

//função para editar o post
export const editButton = (event) => {
    let parent = compareParents(event.target);
    let ul = parent.parentElement;
    let userDiv = ul.parentElement;
    let childs = userDiv.firstChild;

    console.log(childs);

    let child = parent.firstChild;
    let title = child.lastChild;
    let description = child.nextSibling;


}