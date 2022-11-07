let editElement = document.querySelector('.profile__edit');
let popupElement = document.querySelector('.popup');
let popupCloseElement = popupElement.querySelector('.popup__close');
let titleElement = document.querySelector('.profile__title');
let subtitleElement = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input_profile_name');
let nameJob = document.querySelector('.popup__input_profile_job');
let formElement = document.querySelector('.popup__form');

function popupOpen() {
  nameInput.value = titleElement.textContent;
  nameJob.value = subtitleElement.textContent;
  popupElement.classList.add('popup_opened');
}

function popupClose() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  titleElement.textContent = nameInput.value;
  subtitleElement.textContent = nameJob.value;
  popupClose();
}
editElement.addEventListener('click', popupOpen);
popupCloseElement.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
