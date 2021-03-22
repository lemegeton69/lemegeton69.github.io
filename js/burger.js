let adaptiveNavWindow = document.querySelector('.modal-menu'),
adaptiveNavOpenButton = document.querySelector('.header__burger-button'),
adaptiveNavCloseButton = document.querySelector('.modal-menu__close-button');

adaptiveNavOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (adaptiveNavWindow.classList.contains('modal-menu--opened')) {
        document.body.classList.add('lock');
    } else {
        document.body.classList.remove('lock');
    }
    
    adaptiveNavWindow.classList.toggle('modal-menu--opened');
});

adaptiveNavCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    adaptiveNavWindow.classList.toggle('modal-menu--opened');
});