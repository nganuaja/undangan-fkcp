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
