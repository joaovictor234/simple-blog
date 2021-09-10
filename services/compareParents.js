export const compareParents = (target) => {
    //função para verificar se o objeto clicado é o botão ou icon, para evitar que o usuário clique no icon e pegue um elemento errado e devolve a li inteira do post
    //function to check if the clicked object is the button or icon, to prevent the user from clicking on the icon and taking a wrong element and returning the entire post's li
    let parent5;
    if(target.classList.contains('fas') || target.classList.contains('text-p')) {
        let parent2 = target.parentElement;
        let parent3 = parent2.parentElement;
        let parent4 = parent3.parentElement;
        parent5 = parent4.parentElement;
    } else {
        let parent3 = target.parentElement;
        let parent4 = parent3.parentElement;
        parent5 = parent4.parentElement;
    }

    return parent5;
}

//função somente para verificar se o objeto clicado é um botão ou icon e devolver sempre o elemento do botão.
//function only to check if the object clicked is a button or icon and always return the element of the button.
export function compareIconOrButton (target) {
    if(target.classList.contains('buttonPost')) {
        return target;
    }
    if(target.classList.contains('fas') || target.classList.contains('text-p')) {
        let parent = target.parentElement;
        return parent;
    }
}