document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const emailExists = existingUsers.some((user) => user.email === email);
    if (emailExists) {
      alert("Email already exists. Please choose a different email.");
      return;
    }

    // Store new user in localStorage
    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful! You can now login.");
    window.location.href = "login.html";
  });
