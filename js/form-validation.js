const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const textarea = document.querySelector("#textarea");
const popup = document.querySelector(".contact-popup");
const sendBtn = document.querySelector(".contact__button-submit");
const clearBtn = document.querySelector(".contact__button-clear");
const closeBtnPopup = document.querySelector(".contact-popup__button-close");

const showError = (input, msg) => {
  // console.log("msg", msg);
  // console.log("input", input);

  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".form-box__error-text");
  input.classList.add("form-box__input--error");
  errorMsg.style.visibility = "visible";
  errorMsg.textContent = msg;
};

const checkFormValue = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

const clearForm = (input) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".form-box__error-text");
  input.classList.remove("form-box__input--error");
  errorMsg.style.visibility = "hidden";
};

const clearError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".form-box__error-text");
  input.classList.remove("form-box__input--error");
  errorMsg.style.visibility = "hidden";
  console.log(msg);
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(input, `${input.placeholder} atleast ${min} characters`);
  }
};

const checkEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "email not valid");
  }
};

const checkPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (re.test(phone.value)) {
    clearError(phone);
  } else {
    showError(phone, "phone not valid");
  }
};

// check the number of errors
const checkErrors = () => {
  const allFormInputs = document.querySelectorAll(".form-box__input");
  let errorCount = 0;

  allFormInputs.forEach((el) => {
    if (el.classList.contains("form-box__input--error")) {
      errorCount++;
    }

    if (errorCount === 0) {
      popup.classList.add("show-popup");
    }
  });
};

const resetForm = () => {
  [username, email, phone, textarea].forEach((el) => {
    el.value = "";
    clearForm(el);
  });
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkFormValue([username, email, phone]);
  checkLength(username, 3);
  checkEmail(email);
  checkPhone(phone);
  checkErrors();
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetForm();
});

closeBtnPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("show-popup");
  resetForm();
});
