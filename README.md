# Baba Travels

Live: https://janne89.github.io/babatravels/

## Menyn

Menyn finns på ett enda ställe: [scripts/nav.js](scripts/nav.js). Varje sida laddar den i sin `<header>`:

```html
<header>
  <h1>Sidans rubrik</h1>
  <script src="scripts/nav.js"></script>
</header>
```

- **Ny sida i huvudmenyn** – lägg till den i `MAIN` i `nav.js`.
- **Ny undersida** (t.ex. ett nytt schema under en resa) – lägg till den i rätt grupp i `SUB`.
- **Hemlig sida** – länka den inte från `MAIN`. Lägg till `<meta name="robots" content="noindex" />` i `<head>`.
  Hemliga sidor som hör ihop kan ligga i en egen `SUB`-grupp utan `parent`, som projektshower/orientering/poängtavla.

Den aktuella sidan får klassen `active` automatiskt.
