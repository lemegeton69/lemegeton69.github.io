let spoilerToggle = document.querySelector('.main-content__description-button'),
spoilerWindow = document.querySelector('.main-content__description');

spoilerToggle.addEventListener('click', function(evt){
    evt.preventDefault();
    spoilerWindow.style.height = 'auto';
    spoilerToggle.style.display = 'none';
});