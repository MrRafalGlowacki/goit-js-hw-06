const form = document.querySelector(".login-form");
const email = document.querySelector("[name='email']");
const pswrd = document.querySelector("[name='password']");
const btn = document.querySelector("[type='submit']");
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert(
      "Save the forests and put your e-mail and password!\n Do not leave empty fields. Empty fields make our SQL team cry and they waste paper tissues made of threes. \n Be empathetic, do not do this to them!"
    );
  }
  console.log(new User(email.value, pswrd.value));
  form.reset();
}
