# Baba Travels

Live: https://janne89.github.io/babatravels/

## Struktur

Varje evenemang har en egen mapp med allt som hör till det: sidor, bilder,
nedräkning, kalenderfil och dokument. Mappens `index.html` är evenemangets
startsida, så adressen blir t.ex. `.../babatravels/skottland/`.

```
index.html            Startsidan
historik.html         Tidslinje över alla resor
404.html              Visas för okända adresser – skickar gamla länkar vidare
assets/
  css/style.css       Gemensam stil
  js/nav.js           Gemensam meny (se nedan)
  img/                Gemensamma bilder (logga)
skottland/            index, good-to-know, packlista, schema, pdf/
alsace/               index, schema, biljetter/
julbord-2025/         index, julbord-2025.ics
julbord-2026/         index, julbord-2026.ics
projekt-shower/       index (schema), orientering, poangtavla
projekt-35/           index, projekt-35.ics
shower/               index, shower.ics
```

Namngivning: små bokstäver och bindestreck, inga mellanslag eller å/ä/ö i filnamn.

## Nytt evenemang

1. Skapa en mapp, t.ex. `gotland-2027/`, med en `index.html`.
2. Länka gemensamma filer med `../`:
   ```html
   <link rel="stylesheet" href="../assets/css/style.css" />
   <link rel="icon" href="../favicon.ico" type="image/x-icon" />
   ```
3. Lägg in menyn i `<header>`:
   ```html
   <header>
     <h1>Gotland 2027</h1>
     <script src="../assets/js/nav.js"></script>
   </header>
   ```
4. Lägg till evenemanget i `MAIN` i [assets/js/nav.js](assets/js/nav.js).

## Menyn

Menyn finns på ett enda ställe: [assets/js/nav.js](assets/js/nav.js). Sökvägarna där är relativa till sajtens rot.

- **Ny sida i huvudmenyn** – lägg till den i `MAIN`.
- **Evenemang som har varit** – flytta det från `MAIN` till `PAST` (listan under "Tidigare ▾").
- **Ny undersida** (t.ex. ett schema) – lägg till den i rätt grupp i `SUB`.
- **Hemlig sida** – länka den inte från `MAIN` eller `PAST`. Lägg till `<meta name="robots" content="noindex" />` i `<head>`.
  En sida som bara finns i en `SUB`-grupp (som orientering/poängtavla under Projekt Shower) syns inte i huvudmenyn.

Den aktuella sidan får klassen `active` automatiskt.

## Flytta eller byta namn på en sida

Lägg till den gamla adressen i `MOVED` i [404.html](404.html) så fortsätter gamla länkar att fungera.
