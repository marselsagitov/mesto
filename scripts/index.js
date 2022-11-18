let editElement = document.querySelector('.profile__edit');
let addElement = document.querySelector('.profile__add');
let closeElement = document.querySelector('.popup__close');
let closeAddElement = document.querySelector('.popup__close_add');
let popupEditElement = document.querySelector('.popup_edit');
let popupAddElement = document.querySelector('.popup_add');
let nameProfileElement = document.querySelector('.profile__title');
let jobProfileElement = document.querySelector('.profile__subtitle');
let inputNameElement = document.querySelector('.popup__input_profile_name');
let inputJobElement = document.querySelector('.popup__input_profile_job');
let inputAddNameElement = document.querySelector('.popup__input_add_name');
let inputAddLinkElement = document.querySelector('.popup__input_add_link');
let formElement = document.querySelector('.popup__form');
let formAddElement = document.querySelector('.popup__form_add');


// opening a popup_edit and adding titles to an input from a profile when you click on the edit button

function popupEditOpen() {
  inputNameElement.value = nameProfileElement.textContent;
  inputJobElement.value = jobProfileElement.textContent;
  popupEditElement.classList.add('popup_opened');
}

editElement.addEventListener('click', popupEditOpen);

// popup_edit closing when you click on the close button

function popupEditClose() {
  popupEditElement.classList.remove('popup_opened');
}

closeElement.addEventListener('click', popupEditClose);

// editing and saving profile titles

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfileElement.textContent = inputNameElement.value;
  jobProfileElement.textContent = inputJobElement.value;
  popupEditClose();
}

formElement.addEventListener('submit', formSubmitHandler);

// opening popup_add

function popupAddOpen() {
  popupAddElement.classList.add('popup_opened');
}

addElement.addEventListener('click', popupAddOpen);

// popup_add closing when you click on the close button

function popupAddClose() {
  popupAddElement.classList.remove('popup_opened');
}

closeAddElement.addEventListener('click', popupAddClose);


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
  // like button
const likeActive = (event) => {
  event.target.classList.toggle('elements__like_active');
}
  // remove card
const handleDeleteCard = (event) => {
  event.target.closest('.elements__item').remove();
}

const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);

  const name = newCard.querySelector('.elements__title');
  name.textContent = dataCard.name;

  const link = newCard.querySelector('.elements__img');
  link.src = dataCard.link;

  const likeButton = newCard.querySelector('.elements__like');
  likeButton.addEventListener('click', likeActive);

  const deleteBtn = newCard.querySelector('.elements__recycle-bin');
  deleteBtn.addEventListener('click', handleDeleteCard);

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

// event handler

const handleSubmitAddCards = (event) => {
  event.preventDefault();
  renderCard({ name: inputAddNameElement.value, link: inputAddLinkElement.value })
  inputAddNameElement.value = '';
  inputAddLinkElement.value = '';
  popupAddClose();
};

formAddElement.addEventListener('submit', handleSubmitAddCards);

