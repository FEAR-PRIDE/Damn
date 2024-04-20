$(document).ready(function(){
  // Initialize the slider with autoplay
  $('.slider').slick({
      arrows:false,
      dots:true,
      appendDots:'.slider-dots',
      dotsClass:'dots',
      autoplay: true, // Enable autoplay
      autoplaySpeed: 2000 // Set autoplay speed to 3 seconds
  });

  // Open mobile navigation
  let hamberger = document.querySelector('.hamberger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');

  hamberger.addEventListener('click', function(){
      mobileNav.classList.add('open');  
  });

  // Close mobile navigation
  times.addEventListener('click', function(){
      mobileNav.classList.remove('open');  
  });

  // Previous and Next buttons for slider navigation
  let prevButton = document.querySelector('.prev');
  let nextButton = document.querySelector('.next');

  prevButton.addEventListener('click', function() {
      $('.slider').slick('slickPrev'); // Move to previous slide
  });

  nextButton.addEventListener('click', function() {
      $('.slider').slick('slickNext'); // Move to next slide
  });
});
