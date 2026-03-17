const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Golden gate bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

console.log(initialCards);

const profileEditButton = document.querySelector(".profile__edit-btn");

const profileName = document.querySelector(".profile__name");

const profileDescription = document.querySelector(".profile__description");

const editModal = document.querySelector("#edit-modal");

const editModalNameInput = editModal.querySelector("#profile-name-input");

const editFormElement = editModal.querySelector(".modal__form");

const editModalClosebtn = document.querySelector(".modal__close-btn");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");
const cardModalEl = document.querySelector("#expand-modal");
const cardModalClosedBtn = document.querySelector(".modal__close-image-btn");
const cardModalImageEl = document.querySelector(".modal__expand");
const cardModalCaptionEl = document.querySelector(".modal__caption");

// query select the new post button (ie: the button that when clicked is supposed to open up the new-post modal)
// query select the new-post modal
const newPostBtn = document.querySelector(".profile__add-btn");
const newpostModal = document.querySelector("#new-modal");
const newpostClosebtn = newpostModal.querySelector(".modal__close-btn");
const newpostNameInput = newpostModal.querySelector("#new-post-caption-input");
const newpostLink = newpostModal.querySelector("#new-post-image-input");
const newPostForm = newpostModal.querySelector(".modal__form");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  const cardLikeBtnEl = cardElement.querySelector(".card__like-button");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-button_active");
  });
  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");
  cardDeleteBtnEl.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    openModal(cardModalEl);
    cardModalCaptionEl.textContent = data.name;
    cardModalImageEl.src = data.link;
    cardModalImageEl.alt = data.name;
   
  });
  return cardElement;

  //add an event listeneer to the card element
  // listen to a click event, and the callback will add a classname to the variable below
}

// create a variable that is equal to the expand modal

// function openModal() {
//   editModalNameInput.value = profileName.textContent;
//   editModalDescriptionInput.value = profileDescription.textContent;
//   editModal.classList.add("modal_open");
// }

function openModal(modal) {
  modal.classList.add("modal_open");
}

// update this closeModal function so that it takes a 'modal' as a parameter and then removes the 'modal_open' class from that 'modal'
function closeModal(modal) {
  modal.classList.remove("modal_open");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editModal);
}
function newPostFormSubmit(evt) {
  evt.preventDefault();
  const values = {
    name: newpostNameInput.value,
    link: newpostLink.value,
  };
  const card = getCardElement(values);
  cardList.prepend(card);
  evt.target.reset();
  closeModal(newpostModal);
}
// sets up an event listener on the profile-edit button, so that when we click it, it opens up the edit-modal
profileEditButton.addEventListener("click", () => {
  // auto-fill the inputs in the edit-modal
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  // opens the edit-modal
  openModal(editModal);
});

// set up an event listener on the new-post button, so that when click it, it opens up the new-post modal

editModalClosebtn.addEventListener("click", function () {
  closeModal(editModal);
}); 
editFormElement.addEventListener("submit", handleEditFormSubmit);
newPostForm.addEventListener("submit", newPostFormSubmit);
newPostBtn.addEventListener("click", function () {
  openModal(newpostModal);
});
newpostClosebtn.addEventListener("click", function () {
  closeModal(newpostModal);
});

 cardModalClosedBtn.addEventListener("click", () => {
   closeModal(cardModalEl);
 });

initialCards.forEach((item) => {
  const cardEl = getCardElement(item);
  cardList.append(cardEl);
});
