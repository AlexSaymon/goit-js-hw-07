const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const emailField = form.elements.email.value.trim();
  const passwordField = form.elements.password.value.trim();
  if (emailField === "" || passwordField === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: emailField,
      password: passwordField,
    };
    console.log(formData);
    form.reset();
  }
});
