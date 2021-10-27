import { createEditButton, createDeleteButton, createAddNewComment, viewComments, deletePost } from "./buttons.js";

const buttonCreatePost = $("[data-button-post]");
const showForm = $("#add-post");
const form = document.querySelector('#input__post');

export function showOrHideForm() {
    let hide = form.classList.toggle('hide');
    if(!hide) {
        showForm.html(`<i class="material-icons">close</i>`)
        .title = "close form";
    } else {
        showForm.html(`<i class="material-icons">add</i>`)
        .title = "add a post";
    }
}

export const createPost = (comments) => {
    let postList = $("[data-list]");
    let inputTitle = $("[data-title]")
    let inputDescription = $("[data-description]");

    let title = inputTitle.val();
    let description = inputDescription.val();

    let post = $('<li>').addClass('card').addClass('post');

    let headerPost = $('<div>').addClass('header-post')

    let img = document.createElement('img')
    img.classList.add('post-img')
    img.src = "https://images.pexels.com/photos/5764015/pexels-photo-5764015.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    const headerContent = `<div class="user-header"><img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif" alt="" class="imgUser-post"><p class="nameUser-post">Anonymous</p></div><div><p class="titleUser-post">${title}</p></div>`;

    headerPost.html(headerContent);

    let buttons = $('<div>').addClass('contentButtons')
    .append(createEditButton());
    let buttonDelete = createDeleteButton();
    buttonDelete.click(deletePost);
    buttons.append(buttonDelete)
    .title = 'Delete post';

    let commentButton = $('<div>')
    .addClass('contentButtons')
    .append(createAddNewComment())
    .append(viewComments());

    let contentButtons = $('<div>')
    .addClass('containerButtons')
    .append(commentButton)
    .append(buttons);

    const content = `<p class="content-post">${description}</p>`;

    const ul = $('<ul>')
    ul.addClass('commentsList');

    post.append(headerPost)
    .append(img)
    .append(content)
    .append(contentButtons)
    .append(ul);

    postList.prepend(post);
    inputTitle.val("");
    inputDescription.val("");
    showOrHideForm();
}

showForm.on('click', showOrHideForm);
buttonCreatePost.on('click', createPost);