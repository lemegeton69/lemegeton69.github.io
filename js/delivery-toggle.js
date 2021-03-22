function switchWindow(window) {
    window.classList.toggle('delivery__content-wrapper--opened');
}

function findToggleWindow(button) {
    let parrentContent = button.parentElement.children;
    for (let i=0; i < parrentContent.length; i++) {
        if (parrentContent[i].classList.contains('delivery__content-wrapper')) {
            let toggleWindow = parrentContent[i];
            switchWindow(toggleWindow);
            break
        }
    }

}

function buttonAction(button) {
    button.classList.toggle('delivery__toggle-button--opened');
    findToggleWindow(button);
}

let testButton = document.querySelector('.delivery__toggle-button');