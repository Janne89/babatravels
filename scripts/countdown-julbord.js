document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");

  // Sätt tid: 12 december 2025, 17:00 lokal tid
  const eventTime = new Date("2025-12-12T17:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = eventTime - now;

    if (diff <= 0) {
      countdownElement.textContent = "🎉 Julbordet har börjat!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.textContent =
      `${days} dagar, ${hours} timmar, ${minutes} minuter, ${seconds} sekunder kvar`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
