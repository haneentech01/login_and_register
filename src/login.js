document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Store the logged-in user's info in Storage
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "profile.html";
    } else {
      document.getElementById("login-error").textContent =
        "Invalid email or password.";
    }
  });
