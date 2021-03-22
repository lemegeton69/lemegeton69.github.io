let specWindow = document.querySelector('.specification'),
    deliveryWindow = document.querySelector('.delivery'),
    descriptionWindow = document.querySelector('.description');

function toggleAllButtons() {
    let buttonsCollection = document.querySelectorAll('.toggle__button');
    for (let i=0; i < buttonsCollection.length; i++) {
        buttonsCollection[i].classList.remove('toggle__button--opened');
    }
}

function closeAllWindows() {
    specWindow.classList.remove('specification--opened');
    deliveryWindow.classList.remove('delivery--opened');
    descriptionWindow.classList.remove('description--opened');
}

function reactToEvent(button) {
    toggleAllButtons();
    button.classList.add('toggle__button--opened');
    if (button.classList.contains('toggle__button--specification')) {
        console.log('Характеристики!');
        closeAllWindows();
        specWindow.classList.add('specification--opened');
    } else if (button.classList.contains('toggle__button--delivery')) {
        console.log('Доставка!');
        closeAllWindows();
        deliveryWindow.classList.add('delivery--opened');
    } else if (button.classList.contains('toggle__button--description')) {
        console.log('Описание!');
        closeAllWindows();
        descriptionWindow.classList.add('description--opened');
    }
}