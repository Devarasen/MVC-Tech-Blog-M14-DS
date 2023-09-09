async function newPostFormHandler(event) {
  event.preventDefault();
  const blogTitle = document.querySelector("#title").value;
  const blogContent = document.querySelector("#content").value;

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

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to add new Post");
  }
}

document.querySelector("form").addEventListener("submit", newPostFormHandler);
