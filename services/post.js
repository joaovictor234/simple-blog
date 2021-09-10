import { createEditButton, createDeleteButton, createAddNewComment, viewComments, deleteButton } from "./buttons.js";

const buttonCreatePost = document.querySelector("[data-button-post]");
const showForm = document.querySelector("[data-show-form]");
const form = document.querySelector('.input__post');


//função para mostrar ou esconder o formulário de inserção do post
//function to show or hide the post insertion form
const showOrHideForm = () => {
    let hide = form.classList.toggle('hide');
    if(!hide) {
        showForm.innerHTML = `<i class="fas fa-minus-circle"></i> Back`
    } else {
        showForm.innerHTML = `<i class="fas fa-plus-circle"></i> Add a new post`
    }
}

//função para criar o post
//function to create the post
const createPost = (event) => {
    event.preventDefault();
    let postList = document.querySelector("[data-list]");
    let inputTitle = document.querySelector("[data-title]")
    let inputDescription = document.querySelector("[data-description]");

    //criação dos elementos
    //creation of the elements
    let title = inputTitle.value;
    let description = inputDescription.value;

    let post = document.createElement('li');
    post.classList.add('post')

    let headerPost = document.createElement('div');
    headerPost.classList.add("title-post");

    const headerContent = `<img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif" alt="" height="25" width="25" class="image-post">
                            <p class="nameUser-post">Anonymous:</p>
                            <p class="titleUser-post">${title}</p>`
    headerPost.innerHTML = headerContent;

    //criação dos botões de manipulação do post
    //creation of post manipulation buttons
    let buttons = document.createElement('div');
    buttons.classList.add('contentButtons');
    buttons.appendChild(createEditButton());
    let buttonDelete = createDeleteButton();
    let p = document.createElement("p");
    p.classList.add('text-p')
    let text = document.createTextNode("Delete");
    p.appendChild(text);
    buttonDelete.appendChild(p);
    buttonDelete.addEventListener('click', deleteButton);
    buttons.appendChild(buttonDelete);

    let commentButton = document.createElement('div');
    commentButton.classList.add('contentButtons');
    commentButton.appendChild(createAddNewComment());
    commentButton.appendChild(viewComments());

    let contentButtons = document.createElement('div');
    contentButtons.classList.add('containerButtons');
    contentButtons.appendChild(commentButton);
    contentButtons.appendChild(buttons);

    //descrição do post em si.
    //description of the post itself.
    const content = `<p class="content-post">${description}</p>`;

    post.appendChild(headerPost);
    post.innerHTML += content;
    post.appendChild(contentButtons);

    postList.appendChild(post);
    inputTitle.value = " ";
    inputDescription.value = " ";
    showOrHideForm();
}

showForm.addEventListener('click', showOrHideForm);
buttonCreatePost.addEventListener("click", createPost);