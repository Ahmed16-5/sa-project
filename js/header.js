
const userSection = document.getElementById("userSection");


function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}


function renderUserSection() {
  const user = getLoggedInUser();

  if (user) {
    userSection.innerHTML = `
      <span>Hi, ${user.username}</span>
      <button id="logoutBtn" class="logout-btn">Logout</button>
    `;

    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      renderUserSection(); 
      window.location.href = "login.html"; 
    });

  } else {
    userSection.innerHTML = `
      <a href="login.html">Login</a> / 
      <a href="register.html">Register</a>
    `;
  }
}


document.addEventListener("DOMContentLoaded", renderUserSection);
