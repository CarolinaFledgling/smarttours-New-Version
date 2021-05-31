const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const textarea = document.querySelector("#textarea");
const popup = document.querySelector(".contact-popup");
const sendBtn = document.querySelector(".contact__button-submit");
const boxItem = document.querySelector(".form-box");
const errorMsg = document.querySelector(".form-box__error-text");

const checkForm = (input) => {
  console.log(input);
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

const clearError = (input) => {
  [username, email, phone, textarea].forEach((el) => {
    el.value = "";
    input.classList.remove("form-box__input--error");
    errorMsg.style.visibility = "hidden";
  });
};

const showError = (input, msg) => {
  input.classList.add("form-box__input--error");
  errorMsg.style.visibility = "visible";
  console.log(msg);
  errorMsg.textContent = msg;
};

checkLength = (input, min) => {
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
    showError(email, "Email not valid");
  }
};

const checkPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (re.test(phone.value)) {
    clearError(phone);
  } else {
    showError(phone, "Phone not valid");
  }
};

// check the number of errors
const checkErrors = () => {
  const allInputs = document.querySelectorAll(".form-box__input");
  console.log(allInputs);
  let errorCount = 0;

  allInputs.forEach((el) => {
    if (el.classList.contains("form-box__input--error")) {
      errorCount++;
    }

    if (errorCount === 0) {
      popup.classList.add("show-popup");
    }
  });
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm([username, email, phone]);
  checkLength(username, 3);
  checkEmail(email);
  checkPhone(phone);
  checkErrors();
});
