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

const logout = async () => {
  try {
    const response = await fetch("/api/userRoutes/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      displaySuccessModal("Logged out successfully!");
    } else {
      displayErrorModal("Log out failed. Please try again!");
    }
  } catch (error) {
    console.error("An error occurred during logout:", error);
    alert("An error occurred during logout. Please try again later.");
  }
};

document.querySelector("#logout-link").addEventListener("click", logout);
