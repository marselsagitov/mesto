const editElement = document.querySelector('.profile__edit');
const addElement = document.querySelector('.profile__add');
const popupCloseEditElement = document.querySelector('.popup__close_edit');
const popupCloseAddElement = document.querySelector('.popup__close_add');
const popupCloseImgElement = document.querySelector('.popup__close_img');
const popupEditElement = document.querySelector('.popup_edit');
const popupAddElement = document.querySelector('.popup_add');
const nameProfileElement = document.querySelector('.profile__title');
const jobProfileElement = document.querySelector('.profile__subtitle');
const inputNameElement = document.querySelector('.popup__input_profile_name');
const inputJobElement = document.querySelector('.popup__input_profile_job');
const inputAddNameElement = document.querySelector('.popup__input_add_name');
const inputAddLinkElement = document.querySelector('.popup__input_add_link');
const formEditElement = document.querySelector('.popup__form_edit');
const formAddElement = document.querySelector('.popup__form_add');
const popupImgElement = document.querySelector('.popup_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

// universal open popup
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

// universal close popup
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

// opening a popup_edit and adding titles to an input from a profile when you click on the edit button

editElement.addEventListener('click', () => {
  inputNameElement.value = nameProfileElement.textContent;
  inputJobElement.value = jobProfileElement.textContent;
  openPopup(popupEditElement);
});


// popup_edit closing when you click on the close button

popupCloseEditElement.addEventListener('click', () => {
  closePopup(popupEditElement);
});

// editing and saving profile titles

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  nameProfileElement.textContent = inputNameElement.value;
  jobProfileElement.textContent = inputJobElement.value;
  closePopup(popupEditElement);
}

formEditElement.addEventListener('submit', handleProfileFormSubmit);

// opening popup_add

addElement.addEventListener('click', () => {
  openPopup(popupAddElement);
});

// popup_add closing when you click on the close button

popupCloseAddElement.addEventListener('click', () => {
  closePopup(popupAddElement);
});

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


// toggle like button

const toggleLike = (event) => {
  event.target.classList.toggle('elements__like_active');
}

// remove card

const handleDeleteCard = (event) => {
  event.target.closest('.elements__item').remove();
}

//popup_img close

popupCloseImgElement.addEventListener('click', () => {
  closePopup(popupImgElement);
});

// cards generating

const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);

  const name = newCard.querySelector('.elements__title');
  name.textContent = dataCard.name;

  const cardImage = newCard.querySelector('.elements__img');
  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.text;

  const likeButton = newCard.querySelector('.elements__like');
  likeButton.addEventListener('click', toggleLike);

  const deleteBtn = newCard.querySelector('.elements__recycle-bin');
  deleteBtn.addEventListener('click', handleDeleteCard);

  cardImage.addEventListener('click', () => {
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    popupCaption.textContent = name.textContent;
    openPopup(popupImgElement);
  });

  return newCard;
};

// cards adding

const cardContainer = document.querySelector('.elements__list');

const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};

// cards rendering

initialCards.forEach(renderCard);

// event handler

const handleSubmitAddCards = (event) => {
  event.preventDefault();
  renderCard({ name: inputAddNameElement.value, link: inputAddLinkElement.value })
  event.target.reset();
  closePopup(popupAddElement);
};

formAddElement.addEventListener('submit', handleSubmitAddCards);

