// Inisialisasi AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true,
});

// Kontrol Musik Otomatis
window.addEventListener('load', function() {
  var audio = document.getElementById("background-music");
  audio.play().catch(function() {
    console.log("Autoplay was prevented. User interaction required.");
  });
});

// Deteksi klik pertama atau sentuhan pengguna untuk memulai musik
window.addEventListener('click', function() {
  var audio = document.getElementById("background-music");
  if (audio.paused) {
    audio.play().catch(error => {
      console.log("Gagal memutar musik:", error);
    });
  }
}, { once: true }); // Event hanya sekali di-trigger
