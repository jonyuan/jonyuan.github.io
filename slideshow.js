var slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"] 
var manualActivation = [false, false];
showSlides(1, 0);
showSlides(1, 1);
setTimeout(autoTransition, Math.random() * 4000 + 4000, 0);
setTimeout(autoTransition, Math.random() * 4000 + 4000, 1);

function plusSlides(n, no) {
	manualActivation[no] = true;
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1} 
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex[no]-1].style.display = "block"; 
}

function autoTransition(no) {
	if (manualActivation[no] === false) {
		var i;
		var slides = document.getElementsByClassName(slideId[no]);
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
	  }
	  slideIndex[no]++;
	  if (slideIndex[no] > slides.length) {slideIndex[no] = 1} 
	  slides[slideIndex[no]-1].style.display = "block"; 
	}
	manualActivation[no] = false;
  setTimeout(autoTransition, Math.random() * 4000 + 4000, no);
}