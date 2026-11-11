document.addEventListener("DOMContentLoaded", () => {
  // 1. Toggle Mobile Navigation
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // 2. Toggle Show More / Lihat Semua Menu
  const toggleMenuBtn = document.getElementById("toggleMenuBtn");
  const extraMenu = document.getElementById("extraMenu");

  if (toggleMenuBtn && extraMenu) {
    toggleMenuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      extraMenu.classList.toggle("show");

      if (extraMenu.classList.contains("show")) {
        toggleMenuBtn.innerHTML =
          'Sembunyikan Menu <i class="fas fa-chevron-up"></i>';
      } else {
        toggleMenuBtn.innerHTML =
          'Lihat Semua Menu <i class="fas fa-chevron-down"></i>';
      }
    });
  }
});

// 3. Modal Popup Functions (Global Scope)
function openModal(imgSrc, titleText, descText) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");

  if (modal && modalImg && modalTitle && modalDesc) {
    modalImg.src = imgSrc;
    modalTitle.textContent = titleText;
    modalDesc.textContent = descText;
    modal.style.display = "flex";
  }
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Close Modal saat klik area gelap di luar box
window.addEventListener("click", (event) => {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Automatic Hero Background Slideshow (Ganti Gambar Otomatis)
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slideshow .slide');
  let currentSlide = 0;
  const slideInterval = 4000; // Berganti setiap 4000ms (4 detik)

  if (slides.length > 0) {
    setInterval(() => {
      // Hapus kelas active dari slide saat ini
      slides[currentSlide].classList.remove('active');
      
      // Pindah ke slide berikutnya (kembali ke 0 jika sudah slide terakhir)
      currentSlide = (currentSlide + 1) % slides.length;
      
      // Tambahkan kelas active ke slide baru
      slides[currentSlide].classList.add('active');
    }, slideInterval);
  }
});