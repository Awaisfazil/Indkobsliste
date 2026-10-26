# Indkøbsliste-app

En mobilapp lavet i React Native (Expo), hvor man kan holde styr på sin indkøbsliste. Appen er lavet som en del af godkendelsesopgaverne på CBS (Innovation og teknologi).

Appen er udviklet i to iterationer. Anden iteration bygger videre på den feedback og de refleksioner, der kom ud af første runde brugerinddragelse.

## Hvad kan appen?

- **Liste** — viser de varer, der stadig skal købes, og har et søgefelt til at finde en bestemt vare
- **Tilføj** — opretter en ny vare med navn og mængde
- **Historik** — viser de varer, man allerede har købt, og man kan lægge dem tilbage på listen eller slette dem
- **Detaljer** — viser én vare og giver mulighed for at markere den som købt eller slette den

Listen bliver gemt på telefonen, så varerne stadig er der, næste gang appen åbnes.

## Nyt i anden iteration

| Ændring | Hvad det gør |
|---|---|
| Søgefunktion | Søgefelt øverst på Liste-skærmen, der filtrerer varerne mens man taster |
| Lagring af data | Listen gemmes med AsyncStorage, så den huskes efter appen lukkes |
| Historik-skærm | Ny skærm med de varer, man har købt |
| Markér som købt | Ny knap, der flytter en vare fra listen over i historikken |
| Slet vare | Ny knap, der fjerner en vare helt |
| Læg tilbage | Ny knap i historikken, der sætter en købt vare tilbage på listen |

## Teknologier

- React Native
- Expo
- React Navigation (bundnavigation mellem de fire skærme)
- AsyncStorage (lokal lagring på telefonen)

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

[Link til demovideo for anden iteration indsættes her]

Demovideo fra første iteration: https://github.com/Awaisfazil/Indkobsliste/issues/1

## Struktur

```
App.js              // Startpunkt - holder listen af varer, lagringen og navigationen
styles.js           // Al styling samlet ét sted
screens/
  ListeScreen.js     // Viser indkøbslisten og søgefeltet
  TilfojScreen.js     // Formular til at tilføje en ny vare
  HistorikScreen.js  // Viser de købte varer
  DetaljerScreen.js  // Detaljer om én vare med knapper til købt og slet
```

## Hvem har kodet hvad

Opgaven er løst individuelt. Al kode i repositoryet er skrevet af Awais Fazil.
