# Indkøbsliste-app

En simpel mobilapp lavet i React Native (Expo), hvor man kan holde styr på sin indkøbsliste. Appen er lavet som en del af opgaven "Godkendelsesopgave 1: Brugerinddragelse" på CBS (Innovation og teknologi).

## Hvad kan appen?

- **Liste**-skærmen viser alle varer på indkøbslisten
- **Tilføj**-skærmen bruges til at tilføje en ny vare (navn + antal)
- **Detaljer**-skærmen viser mere info om en enkelt vare, når man trykker på den i listen

## Teknologier

- React Native
- Expo
- React Navigation (bundnavigation mellem de tre skærme)

## Sådan kører du appen selv

1. Klon eller download projektet
2. Åbn en terminal i projektmappen
3. Installer alle pakker:
   ```
   npm install
   ```
4. Start appen:
   ```
   npx expo start
   ```
5. Scan QR-koden med Expo Go-appen på din telefon

## Demovideo

Se demovideoen her: https://github.com/Awaisfazil/Indkobsliste/issues/1

Videoen viser en gennemgang af appen: listen med varer, hvordan man tilføjer en ny vare, og hvordan man ser detaljer om en vare.

## Struktur

```
App.js              // Hovedfil - holder styr på listen af varer og navigation
styles.js           // Alt styling samlet ét sted
screens/
  ListeScreen.js     // Viser indkøbslisten
  TilfojScreen.js     // Formular til at tilføje en ny vare
  DetaljerScreen.js  // Detaljer om én vare
```
