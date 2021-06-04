const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#textarea");
const popup = document.querySelector(".contact-popup");
const sendBtn = document.querySelector(".contact__button-submit");
const clearBtn = document.querySelector(".contact__button-clear");
const closeBtnPopup = document.querySelector(".contact-popup__button-close");
const form = document.querySelector(".contact__form");

const inputFields = [nameInput, emailInput, phoneInput, messageInput];
let isFormValid = false;
let isValidationOn = false;
// kiedy piszemy w jednym inpucie w nastepnych zaczyna sie validacja i dostajemy błąd - zabezpieczenie
// niechecmy Walidować az nie bedzie na true

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

const resetInput = (elem) => {
  elem.classList.remove("form-box__input--error");
  elem.nextElementSibling.classList.remove("form-box__error-text--error");
  console.log(elem.nextElementSibling);
};

const invalidateInput = (elem) => {
  elem.classList.add("form-box__input--error");
  elem.nextElementSibling.classList.add("form-box__error-text--error");
};

const validateInputs = () => {
  if (!isValidationOn) return;
  // zapytać sie o linijke 40 czy dobrze to rozumiesz :D czyli jezeli jest true nie rob tego co ponizej ?? zakoncz działanie
  isFormValid = true;
  //   resetInput(nameInput);
  //   resetInput(emailInput);
  //   resetInput(phoneInput);
  inputFields.forEach(resetInput);

  if (!nameInput.value) {
    isFormValid = false;
    invalidateInput(nameInput);
  }

  if (!isValidEmail(emailInput.value)) {
    isFormValid = false;
    invalidateInput(emailInput);
  }

  if (!isValidPhone(phoneInput.value)) {
    isFormValid = false;
    invalidateInput(phoneInput);
  }
  if (!messageInput.value) {
    isFormValid = false;
    invalidateInput(messageInput);
  }
};

// zapytac sie dlaczego  dajemy addEventListener na wszystkie inputy - ?
inputFields.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});

const cleanValueInput = () => {
  inputFields.forEach((el) => {
    el.value = "";
  });
};

// Zapytac sie robiac formularz powinniśmy  dawac addEventlistener na form i event submit czy clik na guzik ? jak roznica ?
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();

  if (isFormValid) {
    popup.classList.add("show-popup");
  }
});

closeBtnPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("show-popup");
  cleanValueInput();
});
