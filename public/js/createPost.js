async function newPostFormHandler(event) {
  event.preventDefault();
  const blogTitle = document.querySelector("#title").value.trim();
  const blogContent = document.querySelector("#content").value.trim();

  if (!blogTitle || !blogContent) {
    $("#errorMessageModal").modal("show");
    return;
  }

  const data = {
    post_title: blogTitle,
    contents: blogContent,
  };

  const response = await fetch(`/api/blogPostRoutes/addNew`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response.status);
  if (response.ok) {
    $("#myForm").addClass("d-none");
    $(".togglePosts").removeClass("d-none");
    $("#toggleForm").text("+ New Post");
  } else {
    alert("Failed to add new Post");
  }
}

document.querySelector("form").addEventListener("submit", newPostFormHandler);
