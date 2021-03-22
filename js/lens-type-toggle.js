let toggleButton = document.querySelector('.lens-type__toggle-button'),
toggleWindow = document.querySelector('.lens-type__list');

toggleButton.addEventListener('click', function(evt){
    if (toggleWindow.classList.contains('lens-type__list--opened')) {
        toggleWindow.classList.toggle('lens-type__list--opened');
        toggleButton.innerText = 'Показать еще';
    } else {
        toggleWindow.classList.toggle('lens-type__list--opened');
        toggleButton.innerText = 'Скрыть фильтр';
    }
});