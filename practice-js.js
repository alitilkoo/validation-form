function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
  
    const name = nameInput.value.trim();
  
    if (name.length === 0) {
      nameError.textContent = 'Name is required.';
      nameInput.classList.add('errorInput');
    } else if (/[^A-Za-z]/.test(name)) {
      nameError.textContent = 'Name can only contain English letters.';
      nameInput.classList.add('errorInput');
    } else if (name.length > 15) {
      nameError.textContent = 'Name must be less than 15 characters.';
      nameInput.classList.add('errorInput');
    } else {
      nameError.textContent = '';
      nameInput.classList.remove('errorInput');
    }
  }
  
  function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
  
    const email = emailInput.value.trim();
  
    // Regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email.length === 0) {
      emailError.textContent = 'Email is required.';
      emailInput.classList.add('errorInput');
    } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Email must be in the correct format.';
      emailInput.classList.add('errorInput');
    } else {
      emailError.textContent = '';
      emailInput.classList.remove('errorInput');
    }
  }
  
  function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
  
    const password = passwordInput.value;
  
    if (password.length === 0) {
      passwordError.textContent = 'Password is required.';
      passwordInput.classList.add('errorInput');
    } else if (password.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long.';
      passwordInput.classList.add('errorInput');
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      passwordError.textContent = 'Password must contain uppercase and lowercase letters and numbers.';
      passwordInput.classList.add('errorInput');
    } else {
      passwordError.textContent = '';
      passwordInput.classList.remove('errorInput');
    }
  }
  
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission if there are errors
    validateName();
    validateEmail();
    validatePassword();
  });
  