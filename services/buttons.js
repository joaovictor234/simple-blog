import { compareParents } from "./compareParents.js";
import { newComment, addComment, showOrHideComments } from "./comments.js";
import { editButton } from "./editPost.js";

export const deletePost = (event) => {
    compareParents(event.target)
    .remove();
}

const createButtonClass = () => {
    return $('<button>')
            .addClass('buttonPost')
            .addClass('btn-floating')
            .addClass('btn-small')
            .addClass('waves-effect')
            .addClass('waves-light');
}

function createIcon() {
    return $('<i>')
            .addClass('material-icons');
}

export const createEditButton = () => {
    let edit = createButtonClass();
    edit.addClass('yellow');
    let icon = createIcon();
    icon.text('edit');
    edit.append(icon)
    .click(editButton)
    .title = 'Edit post';
    return edit;
}

export const createDeleteButton = () => {
    let delet = createButtonClass();
    delet.addClass('red');
    let icon = createIcon();
    icon.text('delete');
    delet.append(icon);
    return delet;
}

export const viewComments = () => {
    let comment = createButtonClass();
    comment.addClass('orange');
    let icon = createIcon();
    icon.text('chat');
    comment.append(icon)
    .click(showOrHideComments)
    .title = 'View Comments';
    return comment;
}

export const createButtonToAddComment = () => {
    let submit = createButtonClass();
    submit.addClass('blue');
    let icon = createIcon();
    icon.text('send');
    submit.append(icon)
    .click(addComment)
    .title = 'Post a comment';
    return submit;
}

export const createAddNewComment = () => {
    let comment = createButtonClass();
    comment.addClass('orange');
    let icon = createIcon();
    icon.text('chat_bubble');
    comment.append(icon)
    .click(newComment)
    .title = 'Add a comment';
    return comment;
}