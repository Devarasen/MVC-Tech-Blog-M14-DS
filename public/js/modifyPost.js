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

async function deletePost(event) {
  event.preventDefault();
  console.log("script loaded for delete");

  const card = $(this).closest(".card");

  const blogPostId = card.find(".blogPostId");

  const blogPostIdData = blogPostId.text().trim();

  console.log("Blog Post ID after trim:", blogPostIdData);

  try {
    // Send the data to the server using fetch
    const response = await fetch(
      `/api/blogPostRoutes/delete/${blogPostIdData}`,
      {
        method: "DELETE",
      }
    );

    console.log(response.status);
    if (response.ok) {
      displaySuccessModal("Blog post deleted successfully!");
    } else {
      displayErrorModal("Failed to delete blog post");
    }
  } catch (error) {
    console.error("Error while deleting the blog post:", error);
    alert("There was an error. Please try again.");
  }
}

async function editPost(event) {
  event.preventDefault();
  console.log("script loaded for edit");

  const card = $(this).closest(".card");

  const contentUpdate = card.find(".content-update");
  const editedContent = contentUpdate.val();

  const blogPostId = card.find(".blogPostId");
  const blogPostIdData = blogPostId.text().trim();

  console.log("Blog Post ID after trim:", blogPostIdData);

  try {
    // Send the data to the server using fetch
    const response = await fetch(`/api/blogPostRoutes/edit/${blogPostIdData}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contents: editedContent }),
    });

    console.log(response.status);
    if (response.ok) {
      displaySuccessModal("Blog post edited successfully!");
    } else {
      displayErrorModal("Failed to delete blog post");
    }
  } catch (error) {
    console.error("Error while editing the blog post:", error);
    alert("There was an error. Please try again.");
  }
}

$(".confirm-delete").click(deletePost);
$(".confirm-edit").click(editPost);
