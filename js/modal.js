let modalWindow = document.querySelector('.modal-store'),
  modalButton = document.querySelector('.feedback-popup__toggle-button');

function toggleModalWindow() {
  modalWindow.classList.toggle('modal-store--opened');
  modalButton.classList.toggle('feedback-popup__toggle-button--opened');
}
