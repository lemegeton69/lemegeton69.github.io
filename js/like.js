function likeToggle(button) {
    button.classList.toggle('item-preview__favorites-button--checked');
    
    if (button.classList.contains('item-preview__favorites-button--checked')) {
        button.innerText = 'В избранном';
    } else {
        button.innerText = 'Добавить в избранное';
    }
}