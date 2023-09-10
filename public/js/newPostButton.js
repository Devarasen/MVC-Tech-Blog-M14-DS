$(document).ready(function () {
  var $toggleFormButton = $("#toggleForm");
  var $myForm = $("#myForm");
  var $myPosts = $(".togglePosts");

  $toggleFormButton.on("click", function () {
    if ($myForm.hasClass("d-none")) {
      $myForm.removeClass("d-none");
      $myPosts.addClass("d-none");
      $toggleFormButton.text("Back to Posts");
    } else {
      $myForm.addClass("d-none");
      $myPosts.removeClass("d-none");
      $toggleFormButton.text("+ New Post");
    }
  });
});
