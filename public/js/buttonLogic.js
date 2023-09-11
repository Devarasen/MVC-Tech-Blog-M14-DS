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

  const firstEdit = $(".first-edit");
  const firstDelete = $(".first-delete");
  const backButton = $(".back-button");

  function toggleButton(button) {
    button.toggleClass("d-none");
  }

  // Add click event listener to "first-edit" button
  firstEdit.click(function () {
    const card = $(this).closest(".card");
    toggleButton(card.find(".first-delete"));
    toggleButton(card.find(".first-edit"));
    toggleButton(card.find(".confirm-edit"));
    toggleButton(card.find(".back-button"));
    toggleButton(card.find(".content-update"));
    card.find(".current-content").addClass("d-none");
  });

  // Add click event listener to "first-delete" button
  firstDelete.click(function () {
    const card = $(this).closest(".card");
    toggleButton(card.find(".first-delete"));
    toggleButton(card.find(".first-edit"));
    toggleButton(card.find(".confirm-delete"));
    toggleButton(card.find(".back-button"));
  });

  // Add click event listener to "back-button"
  backButton.click(function () {
    const card = $(this).closest(".card");
    toggleButton(card.find(".first-delete"));
    toggleButton(card.find(".first-edit"));
    toggleButton(card.find(".back-button"));
    if (!card.find(".confirm-edit").hasClass("d-none")) {
      card.find(".confirm-edit").addClass("d-none");
    }
    if (!card.find(".confirm-delete").hasClass("d-none")) {
      card.find(".confirm-delete").addClass("d-none");
    }
    if (!card.find(".content-update").hasClass("d-none")) {
      card.find(".content-update").addClass("d-none");
    }
    if (card.find(".current-content").hasClass("d-none")) {
      card.find(".current-content").removeClass("d-none");
    }
  });
});
