import { compareParents } from "./compareParents.js"
import { showOrHideForm, createPost } from "./post.js";

export const editButton = (event) => {
    let liElement = compareParents(event.target);
    let title = liElement.find('.titleUser-post').text();
    let description = liElement.find('.content-post').text();
    showOrHideForm();

    let input = liElement.parent().parent().find('.card-content');
    input.find('#title').val(title);
    input.find('#description').val(description);

}