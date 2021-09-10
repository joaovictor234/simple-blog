import { compareParents, compareIconOrButton } from './compareParents.js';
import { createButtonToAddComment, createDeleteButton } from './buttons.js';

//função para adicionar um novo comentário ao post
//function to add a new comment to the post
export const newComment = (event) => {
    let parent1 = event.target;
    let parent5 = compareParents(parent1);
    
    //verifica os elementos clicados e o esconde, evitando que seja adicionado muitos inputs de comentário
    //checks the clicked element and hides it, preventing too many comment inputs from being added
    let iconOrButton = compareIconOrButton(parent1);
    iconOrButton.classList.toggle('hide');
    let brother = iconOrButton.nextSibling;
    brother.classList.toggle('hide');

    let containerComment = document.createElement('div');
    containerComment.classList.add('containerComment');

    let inputComment = document.createElement('input');
    inputComment.type = 'text';
    let inputText = document.createTextNode('Add a comment: ');

    containerComment.appendChild(inputText);
    containerComment.appendChild(inputComment);
    containerComment.appendChild(createButtonToAddComment());

    parent5.appendChild(containerComment);
}

//função para criar uma tabela de comentários
//function to create a table of comments
export const addComment = (event) => {
    let parent = compareIconOrButton(event.target);
    //elemento pai da div
    //div parent element
    let parent2 = parent.parentElement;
    //elemento para aninhar os comentários
    //element to nest comments
    let nestComment = parent2.parentElement;
    let inputComment = parent2;
    
    //pega o elemento pai li
    //get the parent element li
    let parent3 = parent2.parentElement;

    let child;
    let child2;
    //verifica os filhos da li e procura a classe onde ficam os botões
    //check the children of li and look for the class where the buttons are
    if(parent3.hasChildNodes()) {
        child = parent3.childNodes;
        //percorre todos os seus filhos para achar a div dos botões
        //cycles through all your children to find the button div
        for(let i = 0; i < child.length; i++) {
            if(child[i].classList.contains('containerButtons')) {
                child2 = child[i];
            }
        }
    }
    //depois de achado ele vai até o botão de adicionar comentário escondido para exibi-lo de novo para adcionar mais comentários
    //once found it goes to the hidden add comment button to display it again to add more comments
    let child3 = child2.firstChild;
    let child4 = child3.firstChild;
    let child5 = child3.lastChild;
    child4.classList.toggle('hide');
    child5.classList.toggle('hide');
    //remove o input de comentário
    //remove input comment
    inputComment.remove();

    //pega o elemento do input que fica anterior ao botão de adicionar comentário
    //takes the input element that is before the add comment button
    let comment = parent.previousSibling.value;
    
    let commentContent = document.createElement('div');
    commentContent.classList.add('commentsList');

    let content = `<img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif" alt="" height="20"  width="20" class="image-post">
                    <p class="nameUser-comment">Anonymous: </p>
                    <p class="comment-user">${comment}</p>`;
    
    commentContent.innerHTML = content;
                    
    let deleteButton = createDeleteButton()
    deleteButton.classList.add('deleteComment')
    deleteButton.addEventListener('click', deleteComment);
    
    let subDiv1 = document.createElement('div');
    subDiv1.appendChild(commentContent)
    let subDiv2 = document.createElement('div');
    subDiv2.appendChild(deleteButton);
    let subDiv3 = document.createElement('div');
    subDiv3.classList.add('separateDivs');
    subDiv3.appendChild(subDiv1);
    subDiv3.appendChild(subDiv2);

    nestComment.appendChild(subDiv3);
}


//function to delete the comment
const deleteComment = (event) => {
    let parent = compareIconOrButton(event.target);
    let parent2 = parent.parentElement;
    let parent3 = parent2.parentElement;
    parent3.remove();
}

//função para esconder ou mostrar os comentários
//function to hide or show comments
export const showOrHideComments = (event) => {
    let parent = compareParents(event.target);
    let childs = parent.childNodes;
    
    for(let i = 0; i < childs.length; i++) {
        if(childs[i].classList.contains('separateDivs')) {
            childs[i].classList.toggle('hide');
        }
    }
}