const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Clear previous messages
  document.getElementById("usernameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";
  document.getElementById("successMsg").innerText = "";

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  if (username.length < 3) {
    document.getElementById("usernameError").innerText = "Username must be at least 3 characters";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Invalid email format";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
    isValid = false;
  }

  if (!isValid) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(user => user.email === email)) {
    document.getElementById("emailError").innerText = "Email already exists";
    return;
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("successMsg").innerText = "Registration successful!";
  window.location.href = "login.html";
  registerForm.reset();
});
