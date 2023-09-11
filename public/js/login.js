function displayErrorModal(errorMessage) {
  const modalBody = document.querySelector("#errorMessagePlaceholder");
  modalBody.innerText = errorMessage;
  $("#errorMessageModal").modal("show");
}

function displaySuccessModal(successMessage) {
  const modalBody = document.querySelector("#successMessagePlaceholder");
  modalBody.innerText = successMessage;

  // Add an event listener to the modal's close event
  $("#successMessageModal").on("hidden.bs.modal", function () {
    window.location.href = "/";
  });

  $("#successMessageModal").modal("show");
}

const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    try {
      const response = await fetch("/api/userRoutes/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("API Response:", response);

      if (response.ok) {
        displaySuccessModal("Logged in successfully!");
      } else {
        displayErrorModal("Log in unsuccessful!");
      }
    } catch (error) {
      console.error("There was an error:", error);
      alert(
        "There was an error processing your request. Please try again later."
      );
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  try {
    const response = await fetch("/api/userRoutes/signUp", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      displaySuccessModal("Signed up successfully!");
    } else {
      displayErrorModal("Sign up unsuccessful!");
    }
  } catch (error) {
    console.error("There was an error during the signup process:", error);
    alert(
      "There was an error processing your sign up request. Please try again later."
    );
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector("#email-signup-form")
  .addEventListener("submit", signupFormHandler);
console.log("Signup form listener attached!");
