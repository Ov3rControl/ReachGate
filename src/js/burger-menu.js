$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});