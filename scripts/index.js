let editElem = document.querySelector('.profile__edit');
let popupElem = document.querySelector('.popup');
let popupCloseElem = popupElem.querySelector('.popup__close');
let nameElem = document.querySelector('.profile__title');
let aboutElem = document.querySelector('.profile__subtitle');
let inputs = document.querySelectorAll('input');
let formElem = document.querySelector('.popup__form');

function popupOpen() {
  popupElem.classList.add('popup_opened');
  inputs[0].value = nameElem.textContent;
  inputs[1].value = aboutElem.textContent;
}

function popupClose() {
  popupElem.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameElem.textContent = inputs[0].value;
  aboutElem.textContent = inputs[1].value;
  popupClose();
}
editElem.addEventListener('click', popupOpen);
popupCloseElem.addEventListener('click', popupClose);
formElem.addEventListener('submit', formSubmitHandler);
