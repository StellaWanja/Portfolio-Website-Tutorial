// JavaScript Document

//smooth scroll effect
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//open modal
function openModal(){
	//show image viewer when any image is clicked
	document.getElementById('my-modal').style.display="inline-flex";
	//hide body scrollbar when modal opens up
	document.body.style.overflow="hidden";
	//hide navbar when modal opens up
	document.getElementById('my-navbar').style.display="none";
}
//close modal
function closeModal(){
	document.getElementById('my-modal').style.display="none";
	//show scrollbar when moda; closes
	document.body.style.overflow="auto";
	//show navbar when modal closes
	document.getElementById('my-navbar').style.display="flex";
}
//declare variable slideIndex and initialise to 1
var slideIndexJS=1;
//call funtion showSlides(). Hide all slides
showSlides(slideIndexJS);
//function to execute next and previous buttons
function changeSlides(n){
	showSlides(slideIndexJS+=n);
}
//display clicked image
function currentSlide(n){
	showSlides(slideIndexJS=n);
}
//main function to operate slideshow
function showSlides(n){
	var i;
	//get all elements with "my-slides"
	var slidesJS=document.getElementsByClassName("my-slides");
	//overflow on last image to first image
	if (n>slidesJS.length){slideIndexJS=1;}
	//from first to last
	if(n<1){slideIndexJS=slidesJS.length;} 
	//hide images
	for(i=0;i<slidesJS.length;i++){
		slidesJS[i].style.display="none";
	}
	slidesJS[slideIndexJS-1].style.display="block";
}