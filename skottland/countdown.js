document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
  
    // Set the flight time (local time zone)
    const flightTime = new Date("2025-07-28T07:10:00");
  
    function updateCountdown() {
      const now = new Date();
      const diff = flightTime - now;
  
      if (diff <= 0) {
        countdownElement.textContent = "Flyget har gått! ✈️";
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      countdownElement.textContent = `${days} dagar, ${hours} timmar, ${minutes} minuter, ${seconds} sekunder kvar`;
    }
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
  