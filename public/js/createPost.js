async function newPostFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (!title || !content) {
    displayErrorModal("Tile and/or content missing. Unable to post.");
    return;
  }

  const data = {
    post_title: title,
    contents: content,
  };

  try {
    const response = await fetch(`/api/blogPostRoutes/addNew`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      displaySuccessModal("Post added successfully!");
      // Optionally redirect or reload the page to show the new post
    } else {
      const responseData = await response.json();
      alert(
        "Failed to add post. Reason: " +
          (responseData.message || "Unknown error")
      );
    }
  } catch (error) {
    console.error("Error while sending request:", error);
    alert("There was an error. Please try again.");
  }

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
      location.reload();
    });

    $("#successMessageModal").modal("show");
  }
}

document.querySelector("form").addEventListener("submit", newPostFormHandler);
