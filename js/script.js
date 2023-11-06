$(document).ready(function () {
    // Open modal when a thumbnail is clicked
    $(".thumbnail-link").click(function (e) {
      e.preventDefault();
      var imgSrc = $(this).attr("href");
      $("#modal-image").attr("src", imgSrc);
      $(".modal").show();
    });
  
    // Close modal when the close button is clicked
    $("#close-modal").click(function () {
      $(".modal").hide();
    });
  });
  