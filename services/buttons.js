import { compareParents } from "./compareParents.js";
import { newComment, addComment, showOrHideComments } from "./comments.js";
import { editButton } from "./editPost.js";

//função para excluir o post criado
//function to delete the created post
export const deleteButton = (event) => {
    let target = event.target;
    let parent = compareParents(target);
    parent.remove();
}

//função para criar um botão para editar o post
//function to create a button to edit the post
export const createEditButton = () => {
    let edit = document.createElement('button');
    edit.classList.add('editPost');
    edit.classList.add('buttonPost');
    let icon = document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-edit');
    let p = document.createElement("p");
    p.classList.add('text-p')
    let text = document.createTextNode("Edit");
    p.appendChild(text);
    edit.appendChild(icon);
    edit.appendChild(p);
    edit.addEventListener('click', editButton);
    return edit;
}

//função para criar um botão para excluir o post
//function to create a button to delete the post
export const createDeleteButton = () => {
    let delet = document.createElement('button')
    delet.classList.add('deletePost');
    delet.classList.add('buttonPost');
    let icon = document.createElement('i');
    icon.classList.add("fas");
    icon.classList.add("fa-trash-alt");
    delet.appendChild(icon);
    return delet;
}

//função para exibir ou esconder os comentários
//function to show or hide comments
export const viewComments = () => {
    let comment = document.createElement('button');
    comment.classList.add('buttonPost');

    let icon = document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-comments');
    comment.appendChild(icon);
    comment.addEventListener('click', showOrHideComments);

    return comment;
}

//função para criar um botão para adicionar um novo comentário
export const createButtonToAddComment = () => {
    let submit = document.createElement('button');
    submit.classList.add('buttonPost');
    let icon = document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-plus-square');
    submit.appendChild(icon);
    submit.addEventListener('click', addComment);
    return submit;
}

//função para criar um botão para adicionar comentário
//function to create a button to add a new comment
export const createAddNewComment = () => {
    let comment = document.createElement('button');
    comment.classList.add('buttonPost');
    let icon = document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-comment-medical');
    comment.appendChild(icon);
    comment.addEventListener('click', newComment);
    return comment;
}