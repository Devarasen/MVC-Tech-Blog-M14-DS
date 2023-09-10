console.log("script loaded for comment form");

async function addCommentHandler(event) {
  event.preventDefault();
  console.log("script loaded for comment form");

  const commentElement = document.querySelector("#content");
  const blogPostElement = document.querySelector("#blogPostId");

  console.log("Comment Content before trim:", commentElement.value);
  console.log("Blog Post ID before trim:", blogPostElement.textContent);

  // Retrieve the content and blogPostId from the form
  const commentContent = document.querySelector("#content").value.trim();
  const blogPostId = document.querySelector("#blogPostId").textContent.trim();
  console.log("script loaded for comment form");
  // Check if the content is provided
  if (!commentContent) {
    alert("No comment to submit");
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
      location.reload();
      alert("Comment added successfully!");
    } else {
      alert("Failed to add comment");
    }
  } catch (error) {
    console.error("Error while adding the comment:", error);
    alert("There was an error. Please try again.");
  }
}

document
  .querySelector("#commentForm")
  .addEventListener("submit", addCommentHandler);
