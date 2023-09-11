async function deletePost(event) {
  event.preventDefault();
  console.log("script loaded for delete");

  const card = $(this).closest(".card");

  const blogPostId = card.find(".blogPostId");

  blogPostIdData = blogPostId.text().trim();

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
      location.reload();
      alert("Blog post deleted successfully!");
    } else {
      alert("Failed to delete blog post");
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
  blogPostIdData = blogPostId.text().trim();

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
      location.reload();
      alert("Blog post edited successfully!");
    } else {
      alert("Failed to edit blog post");
    }
  } catch (error) {
    console.error("Error while editing the blog post:", error);
    alert("There was an error. Please try again.");
  }
}

$(".confirm-delete").click(deletePost);
$(".confirm-edit").click(editPost);
