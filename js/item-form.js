let selectForBothCollection = document.querySelectorAll('.item-parameters__select-wrapper--both'),
    selectForSingleCollection = document.querySelectorAll('.item-parameters__select-wrapper--single'),
    buttonForSingle = document.querySelector('.item-parameters__toggle-button--equal'),
    buttonForBoth = document.querySelector('.item-parameters__toggle-button--differing'),
    countForBothCollection = document.querySelectorAll('.item-parameters__count-wrapper--both'),
    countForSingleCollection = document.querySelectorAll('.item-parameters__count-wrapper--single');

function changeFilterLayout(currentButton, anotherButton) {
    currentButton.classList.add('item-parameters__toggle-button--active');
    anotherButton.classList.remove('item-parameters__toggle-button--active');
    toggleInputs(selectForBothCollection);
    toggleInputs(selectForSingleCollection);
    toggleAttributes(selectForBothCollection);
    toggleAttributes(selectForSingleCollection);
    toggleInputs(countForBothCollection);
    toggleInputs(countForSingleCollection);
    toggleAttributes(countForBothCollection);
    toggleAttributes(countForSingleCollection);
}

function toggleInputs(currentCollection) {
    for (var i = 0; i < currentCollection.length; i++) {
        if (currentCollection[i].classList.contains('item-parameters__select-wrapper')) {
            currentCollection[i].classList.toggle('item-parameters__select-wrapper--hidden');
        } else if (currentCollection[i].classList.contains('item-parameters__count-wrapper')) {
            currentCollection[i].classList.toggle('item-parameters__count-wrapper--hidden');
        }
    }
}

function toggleAttributes(currentCollection) {
    for (var i = 0; i < currentCollection.length; i++) {
        let collectionItemChildrens = currentCollection[i].children;
        for (var j = 0; j < collectionItemChildrens.length; j++) {
            let checkingNode = collectionItemChildrens[j];
            if (checkingNode.classList.contains('item-parameters__select')) {
                requiredAttribute = checkingNode.hasAttribute('required');
                if (requiredAttribute) {
                    checkingNode.removeAttribute('required');
                } else {
                    checkingNode.setAttribute('required', 'required');
                }
            } else if (checkingNode.classList.contains('item-parameters__lens-count-input')) {
                requiredAttribute = checkingNode.hasAttribute('required');
                if (requiredAttribute) {
                    checkingNode.removeAttribute('required');
                } else {
                    checkingNode.setAttribute('required', 'required');
                }

                requiredAttribute = checkingNode.hasAttribute('disabled');
                if (requiredAttribute) {
                    checkingNode.removeAttribute('disabled');
                } else {
                    checkingNode.setAttribute('disabled', 'disabled');
                }
            } else {
                continue
            }
        }
    }
}

function changeTheNumber(button) {
    let currentInput = button.parentElement.querySelector('.item-parameters__lens-count-input'),
    inputValue = Number(currentInput.value);
    if (button.classList.contains('item-parameters__count-button--decrease')) {
        if (inputValue > 0) {
            inputValue = inputValue - 1;
            currentInput.value = inputValue;
        }
    } else if (button.classList.contains('item-parameters__count-button--increase')) {
        inputValue = inputValue + 1;
        currentInput.value = inputValue;
    }
}

buttonForSingle.addEventListener('click', function(){
    changeFilterLayout(buttonForSingle, buttonForBoth);
});

buttonForBoth.addEventListener('click', function(){
    changeFilterLayout(buttonForBoth, buttonForSingle);
})
