document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");

  // Sätt tid: 12 juni 2026, 09:00 lokal tid (startdatum för 3-dagarsresan)
  const eventTime = new Date("2026-06-12T09:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = eventTime - now;

    // Resan var 12–14 juni – efter det är den över.
    if (now >= new Date("2026-06-15T00:00:00")) {
      countdownElement.textContent = "✅ Projekt 35 genomfördes 12–14 juni 2026 🎂";
      return;
    }

    if (diff <= 0) {
      countdownElement.textContent = "🎉 Projekt 35 har börjat! 🎂";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Specialmeddelanden för olika tidsperioder
    if (days > 365) {
      const years = Math.floor(days / 365);
      const remainingDays = days % 365;
      countdownElement.textContent = 
        `⏰ ${years} år och ${remainingDays} dagar kvar till den hemliga överraskningen!`;
    } else if (days > 30) {
      const months = Math.floor(days / 30);
      const remainingDays = days % 30;
      countdownElement.textContent = 
        `⏰ ${months} månader och ${remainingDays} dagar kvar till Projekt 35!`;
    } else if (days > 0) {
      countdownElement.textContent =
        `⏰ ${days} dagar, ${hours} timmar, ${minutes} minuter, ${seconds} sekunder kvar!`;
    } else {
      countdownElement.textContent =
        `⏰ ${hours} timmar, ${minutes} minuter, ${seconds} sekunder kvar!`;
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});