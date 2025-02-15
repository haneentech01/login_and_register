// Check if the user is logged in
const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

if (loggedInUser) {
  document.getElementById("profile-info").innerHTML = `
    <p>Name: ${loggedInUser.name}</p>
    <p>Email: ${loggedInUser.email}</p>
  `;
} else {
  alert("You need to log in first.");
  window.location.href = "login.html";
}

document.getElementById("logout-btn").addEventListener("click", function () {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});
