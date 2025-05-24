document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('show');
  });


 document.addEventListener("DOMContentLoaded", function () {
      const toggle = document.getElementById("goldToggle");
      const menu = document.getElementById("goldMenu");

      toggle.addEventListener("click", function () {
        menu.classList.toggle("show");
      });
    });


  const slider = document.getElementById("cardSlider");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  
  // Scroll by 1 card width
  const getCardWidth = () =>
    slider.querySelector(".card-slide").offsetWidth + 20; // includes gap
  
  // Scroll function
  function scrollSlider(direction) {
    slider.scrollBy({ left: direction * getCardWidth(), behavior: "smooth" });
    stopAutoSlide(); // Stop auto-slide if user interacts
  }
  
  // Event Listeners
  nextBtn.addEventListener("click", () => scrollSlider(1));
  prevBtn.addEventListener("click", () => scrollSlider(-1));
  
  // Auto Slide Control
  let autoSlide = setInterval(() => scrollSlider(1), 1000);
  
  function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = null;
  }
  
 
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  });
 



 
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    // Highlight active button
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter gallery
    galleryItems.forEach(item => {
      const match = category === "all" || item.dataset.category === category;
      item.style.display = match ? "block" : "none";
    });
  });
});

  