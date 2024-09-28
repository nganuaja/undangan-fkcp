// Inisialisasi AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true,
});

let tapCount = 0;
let tapTimeout;

// Fungsi untuk memutar musik
function playMusic() {
    const audio = document.getElementById("background-music");
    audio.play().catch(error => {
        console.log("Gagal memutar musik:", error);
    });
}

// Fungsi untuk menghentikan musik
function stopMusic() {
    const audio = document.getElementById("background-music");
    audio.pause();
}

// Event Listener untuk menangani sentuhan
window.addEventListener('touchstart', function() {
    tapCount++;

    // Set timeout untuk mengatur hitungan sentuhan
    clearTimeout(tapTimeout);
    tapTimeout = setTimeout(() => {
        if (tapCount === 1) {
            playMusic();
        } else if (tapCount === 2) {
            stopMusic();
        }
        tapCount = 0; // Reset hitungan
    }, 300); // 300 ms untuk mendeteksi sentuhan ganda
});

