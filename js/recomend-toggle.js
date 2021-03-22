let togggleButton = document.querySelector('.catalog-layout__toggle-button'),
    toggleList = document.querySelector('.catalog-layout__list--grid');

function checkButton(button) {
    if (button.classList.contains('catalog-layout__toggle-button--opened')) {
        console.log('Есть');
        toggleList.classList.add('catalog-layout__list--opened');
        button.innerText = 'Скрыть';
    } else {
        console.log('Нету');
        toggleList.classList.remove('catalog-layout__list--opened');
        button.innerText = 'Увидеть больше';
    }
}

togggleButton.addEventListener('click', function(){
    togggleButton.classList.toggle('catalog-layout__toggle-button--opened');
    checkButton(togggleButton);
})