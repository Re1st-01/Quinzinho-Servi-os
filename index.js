// site/1.js
  const nav = document.getElementById("mainNav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav.classList.add(
        "fixed", "top-0", "left-0", "w-full", "shadow-md", "py-2", "z-50"
      );
      nav.classList.remove("py-4");
    } else {
      nav.classList.remove(
        "fixed", "top-0", "left-0", "w-full", "shadow-md", "py-2", "z-50"
      );
      nav.classList.add("py-4");
    }
  });

  const images = document.querySelectorAll('#carousel img');
  let current = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.style.opacity = i === index ? '1' : '0';
    });
  }

  function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
  }

  // Inicializa
  showSlide(current);
  setInterval(nextSlide, 5000); // troca a cada 5 segundos