let editElement = document.querySelector('.profile__edit');
let popupElement = document.querySelector('.popup');
let popupCloseElement = popupElement.querySelector('.popup__close');
let titleElement = document.querySelector('.profile__title');
let subtitleElement = document.querySelector('.profile__subtitle');
let inputs = document.querySelectorAll('input');
let formElement = document.querySelector('.popup__form');

function popupOpen() {
  inputs[0].value = titleElement.textContent;
  inputs[1].value = subtitleElement.textContent;
  popupElement.classList.add('popup_opened');
}

function popupClose() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  titleElement.textContent = inputs[0].value;
  subtitleElement.textContent = inputs[1].value;
  popupClose();
}
editElement.addEventListener('click', popupOpen);
popupCloseElement.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
