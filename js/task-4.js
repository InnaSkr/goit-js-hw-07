document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.querySelector('input[name="email"]').value.trim();
  const passwordInput = document.querySelector('input[name="password"]').value.trim();

  if (!emailInput || !passwordInput) {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: emailInput,
      password: passwordInput
    };

    console.log(formData);
    document.querySelector('.login-form').reset();
  }
});
