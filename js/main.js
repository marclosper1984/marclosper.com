$(document).ready(function() {

  // SMOOTH SCROLLING
  // Add smooth scrolling on all links inside the navbar
  $(".mlSmoothScroll").on('click', function() {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if

  });

  // BACK TO TOP
  // set a window offset for when you want the button to appear
  var offset = 650;
  
  $(window).scroll(function(){

    // Check if window scroll height is greater than offset
    if ($(this).scrollTop() > offset) {

      // Fade in button
      $('#backToTop').fadeIn('slow');
    } else {

      // Fade out button
      $('#backToTop').fadeOut('slow');
    } // End if
  })
});