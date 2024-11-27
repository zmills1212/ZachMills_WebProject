$(document).ready(function () {
  let currentSlide = 0;
  const slides = $(".slideshow .slide");
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.hide();
      $(slides[index]).fadeIn();
  }

  $(".next").click(function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  });

  $(".prev").click(function () {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
  });

  showSlide(currentSlide);

  setInterval(function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  }, 3000); 
});
