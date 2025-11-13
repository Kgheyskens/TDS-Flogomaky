# MeeMetMij

Welkom bij MeeMetMij!  
Wij zijn een jong team gedreven door een simpele missie: elke schooldag veiliger, socialer en gemakkelijker maken – voor kinderen, ouders én scholen. Laten we samen veilig van a naar b gaan.

---

This repository now includes a small multi-page prototype website (Dutch) under the `pages/` folder. It contains a professional-looking layout, simple JS interactions (preloader, form handling, lazy image loading) and self-made SVG placeholders.

Quick preview (Windows, cmd.exe)

- Using Node (http-server, via npx):

```bat
npx http-server pages -o
```

- Using Python 3 (if installed):

```bat
python -m http.server 8000 --directory pages
```

Then open: http://localhost:8000

If the automatic browser open flag doesn't work, open the URL manually.

---

Site structure (new/updated files)

pages/
- index.html           — Hoofdpagina (landing)
- wie.html             — 'Wie zijn we' (team)
- experimenten.html    — Experimenten & validatie
- contact.html         — Contact & inschrijven (formulier placeholder)
- src/styles.css       — Global stylesheet used by all pages
- src/app.js           — Small JS for preloader, form handling and lazy images
- assets/*.svg         — Self-made SVG placeholder images (logo, hero, team members)

Root
- LICENSE              — MIT license (created earlier)
- README.md            — (this file)

---

Notes & next steps

- Forms are currently client-side placeholders (no backend). I can wire the sign-up form to Mailchimp/Netlify Forms/Google Forms or create a simple serverless endpoint.
- I can extract the header/footer into a shared template if you plan to scale to more pages or use a static site generator (11ty, Hugo, etc.).
- I can add real images, a favicon, or analytics/tracking if you want.

---

## Wie zijn wij?

Wij zijn Team Flogomaky, bestaande uit:
- Mathias Broeckx
- Flor Bosch
- Kayn Gheyskens
- Govart Peijnenborg

MeeMetMij is ontstaan vanuit onze persoonlijke ervaring als studenten én als onderdeel van de samenleving. We zagen hoe drukke schoolpoorten en weinig overzicht zorgen voor stress bij ouders én onveiligheid voor kinderen. Daarom bouwen we aan een platform dat alles rond schoolverkeer samenbrengt.

---

## Wat doen wij?

- **Plannen & begeleiden van schoolroutes**  
  Kinderen reizen samen met een begeleider veilig naar school of huis.

- **Zorg, overzicht & communicatie**  
  Eén centrale applicatie voor ouders, begeleiders en scholen. Ouders krijgen notificaties als hun kind op school vertrekt of aankomt.

- **Sociaal & duurzaam**  
  Minder verkeer aan de poort, meer fietsers, meer contact tussen ouders.

---

## Onze aanpak

MeeMetMij startte als een experiment: een eenvoudige landingspagina, interviews met ouders, en testdagen op school. Onze grootste inzichten zoals: ouders willen geruststelling en actuele info, scholen zoeken overzicht en minder verkeersdrukte. Met elke feedback passen we ons idee aan.

---

## Resultaten & Validatie

- Ouders niet bereid apart te betalen
- Succesvolle testdagen met positieve feedback uit de buurt en vrienden/familie
- Scholen vragen directe rapportage & eenvoudige communicatie
- Begeleiders willen flexibiliteit in routes en tijden
- Scholen zijn bereid het project te ondersteunen

---

## Documenten in deze map

- Business Model Canvas
- Value Proposition Design
- Testing Business Ideas (experimentele aanpak en inzichten)
- Vragenlijst ouders/scholen

---

## Hoe kun je meedoen?

We zoeken altijd feedback en mensen die hun mening willen delen!  
Doe anoniem mee via onze vragenlijst https://forms.gle/AffzbHDtCfiS3YgKA

MeeMetMij, samen onderweg.
