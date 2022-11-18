let editElement = document.querySelector('.profile__edit');
let closeElement = document.querySelector('.popup__close');
let popupElement = document.querySelector('.popup');
let nameProfileElement = document.querySelector('.profile__title');
let jobProfileElement = document.querySelector('.profile__subtitle');
let inputNameElement = document.querySelector('.popup__input_profile_name');
let inputJobElement = document.querySelector('.popup__input_profile_job');
let formElement = document.querySelector('.popup__form');

// opening a popup and adding titles to an input from a profile when you click on the edit button

function popupOpen() {
  inputNameElement.value = nameProfileElement.textContent;
  inputJobElement.value = jobProfileElement.textContent;
  popupElement.classList.add('popup_opened');
}

editElement.addEventListener('click', popupOpen);

// popup closing when you click on the close button

function popupClose() {
  popupElement.classList.remove('popup_opened');
}

closeElement.addEventListener('click', popupClose);

// editing and saving profile titles

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfileElement.textContent = inputNameElement.value;
  jobProfileElement.textContent = inputJobElement.value;
  popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);


//six default cards

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// get template

const cardTemplate = document.querySelector('#template').content.querySelector('.elements__item');

// cards generating

const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);

  const name = newCard.querySelector('.elements__title');
  name.textContent = dataCard.name;

  const link = newCard.querySelector('.elements__img');
  link.src = dataCard.link;

  return newCard;
};

// cards adding

const cardContainer = document.querySelector('.elements__list');

const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};

// cards rendering

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
})
