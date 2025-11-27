const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login successful!");
    window.location.href = "home.html"; // redirect
  } else {
    document.getElementById("loginError").innerText = "Invalid email or password";
  }
});
