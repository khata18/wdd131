// main.js - shared between login.html and signup.html

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("signup-form")) {
    setupSignupForm();
  }

  if (document.getElementById("login-form")) {
    setupLoginForm();
  }
});

// Setup for signup page
function setupSignupForm() {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const user = {};
    let allFilled = true;

    inputs.forEach(input => {
      const name = input.placeholder.replace(/\s+/g, "").toLowerCase();
      user[name] = input.value.trim();
      if (!input.value.trim()) allFilled = false;
    });

    if (!allFilled) {
      alert("Please fill out all fields.");
      return;
    }

    if (user.password !== user.confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Prevent duplicate email
    const duplicate = users.find(u => u.email === user.email);
    if (duplicate) {
      alert("This email is already registered.");
      return;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please log in.");
    form.reset();
    window.location.href = "login.html";
  });
}

// Setup for login page
function setupLoginForm() {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.querySelector("input[type='email']").value.trim();
    const password = form.querySelector("input[type='password']").value.trim();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const matchedUser = users.find(u => u.email === email && u.password === password);

    if (matchedUser) {
      alert(`Welcome back, ${matchedUser.firstname || "User"}!`);
      // You can redirect to dashboard here
    } else {
      alert("Incorrect email or password.");
    }
  });
}
