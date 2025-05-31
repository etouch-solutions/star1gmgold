 

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
  
  
const burgerMenu = document.getElementById('burgerMenu');
const navOverlay = document.getElementById('navOverlay');

function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('active');
    }

    // Smooth scroll for compatibility
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          document.getElementById('navLinks').classList.remove('active'); // close menu on click
        }
      });
    });
   
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
  }

  // Close menu when clicking a link (on mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
      document.getElementById('navLinks').classList.remove('active');
    });
  });
 

    