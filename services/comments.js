import { compareParents } from './compareParents.js';
import { createButtonToAddComment, createDeleteButton } from './buttons.js';

export const newComment = (event) => {
    let commentButton = $(event.target).parent();
    let contentComment = compareParents(event.target);
    
    commentButton.toggleClass('hide');
    let showCommentsButton = commentButton.next();
    showCommentsButton.toggleClass('hide');

    let containerComment = $('<div>');
    containerComment.addClass('containerComment');

    let inputComment = $('<input>');
    inputComment.type = 'text';
    let inputText = document.createTextNode('Add a comment: ');

    let textAndButton = $('<div>')
    .addClass('textAndButton')
    .append(inputText)
    .append(createButtonToAddComment());

    containerComment.append(textAndButton)
    .append(inputComment);

    contentComment.append(containerComment);
}

export const addComment = (event) => {
    let button = $(event.target);
    let nestComment = compareParents(button).find('.commentsList');
    let inputComment = button.parent().parent().parent();
    let comment = inputComment.find('input').val();
    
    
    let profile = `<div class="commentUserName"><img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif" alt="" height="20"  width="20" class="commentImage">
    <p class="nameUser-comment">Anonymous: </p></div>`;
    let content = `<p class="textComment">${comment}</p>`;
    let commentProfile = $('<div>');
    commentProfile.addClass('commentUser')
    .append(profile)
    .append(createDeleteButton().click(deleteComment));
    
    let contentComment = $('<li>')
    contentComment.addClass('comment')
    .append(commentProfile)
    .append(content);
    let verifyComment = nestComment.find('.comment:first') 

    if(nestComment.has()) {
        if(verifyComment.hasClass('hide')) {
            contentComment.toggleClass('hide');
        }
    }

    nestComment.append(contentComment);


    compareParents(button).find('.containerButtons').find('.contentButtons:first').find('.buttonPost:first').toggleClass('hide').next().toggleClass('hide');
    
    inputComment.remove();
}

const deleteComment = (event) => {
    let element = event.target;
    $(element).parent().parent().parent().remove();
}

export const showOrHideComments = (event) => {
    let childs = compareParents(event.target).find('.commentsList').children();
    
    for(let i = 0; i < childs.length; i++) {
        if(childs[i].classList.contains('comment')) {
            childs[i].classList.toggle('hide');
        }
    }
}