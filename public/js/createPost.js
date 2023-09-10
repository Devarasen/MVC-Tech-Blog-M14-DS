async function newPostFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (!title || !content) {
    $("#errorMessageModal").modal("show");
    return;
  }
  console.log("test1");

  const data = {
    post_title: title,
    contents: content,
  };

  console.log("test1");

  try {
    const response = await fetch(`/api/blogPostRoutes/addNew`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("test2");

    if (response.ok) {
      location.reload();
      alert("Post added successfully!");
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
}

document.querySelector("form").addEventListener("submit", newPostFormHandler);
