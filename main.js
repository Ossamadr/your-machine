document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 4000);
});

// reload
document.addEventListener("DOMContentLoaded", function() {
  var reload = document.getElementById('reload');
  var containerWeb = document.getElementById('containerWeb');

  // عرض h2 لمدة 3 ثواني ثم إخفاؤه وعرض span
  setTimeout(function() {
    reload.style.display = 'none';
    containerWeb.style.display = 'inline';
  }, 3000);
});

