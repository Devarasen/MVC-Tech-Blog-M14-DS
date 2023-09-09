document.addEventListener("DOMContentLoaded", function () {
  var toggleFormButton = document.getElementById("toggleForm");
  var myForm = document.getElementById("myForm");

  toggleFormButton.addEventListener("click", function () {
    if (myForm.classList.contains("d-none")) {
      myForm.classList.remove("d-none");
      toggleFormButton.textContent = "Back";
    } else {
      myForm.classList.add("d-none");
      toggleFormButton.textContent = "+ New Post";
    }
  });
});
