async function addCommentHandler(event) {
  event.preventDefault();

  const commentElement = document.querySelector("#content");
  const blogPostElement = document.querySelector("#blogPostId");

  console.log("Comment Content before trim:", commentElement.value);
  console.log("Blog Post ID before trim:", blogPostElement.textContent);

  // Retrieve the content and blogPostId from the form
  const commentContent = document.querySelector("#content").value.trim();
  const blogPostId = document.querySelector("#blogPostId").textContent.trim();

  // Check if the content is provided
  if (!commentContent) {
    displayErrorModal("Content missing. Unable to post.");
    return;
  }

  // Structure the data to be sent
  const data = {
    blogPostId: blogPostId,
    comment: commentContent,
  };

  try {
    // Send the data to the server using fetch
    const response = await fetch(`/api/commentRoutes/addNew`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response.status);
    if (response.ok) {
      displaySuccessModal("Comment added successfully!");
    } else {
      displayErrorModal("Failed to add comment");
    }
  } catch (error) {
    console.error("Error while adding the comment:", error);
    displayErrorModal("There was an error. Please try again.");
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

document
  .querySelector("#commentForm")
  .addEventListener("submit", addCommentHandler);
