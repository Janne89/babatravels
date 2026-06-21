// Ändra datumet nedan till rätt dag/tid för babyshowern!
const showerDatum = new Date("2026-07-04T10:30:00");

function uppdateraNedrakning() {
  const nu = new Date();
  const skillnad = showerDatum - nu;
  const el = document.getElementById("countdown");
  if (!el) return;

  if (skillnad <= 0) {
    el.textContent = "🎉 Det är idag! Lycka till med överraskningen! 🎉";
    return;
  }

  const dagar = Math.floor(skillnad / (1000 * 60 * 60 * 24));
  const timmar = Math.floor((skillnad / (1000 * 60 * 60)) % 24);
  const minuter = Math.floor((skillnad / (1000 * 60)) % 60);
  const sekunder = Math.floor((skillnad / 1000) % 60);

  el.textContent = `⏳ ${dagar}d ${timmar}h ${minuter}m ${sekunder}s kvar till Projekt Shower!`;
}

setInterval(uppdateraNedrakning, 1000);
uppdateraNedrakning();
