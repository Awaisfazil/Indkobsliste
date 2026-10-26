// App.js er appens startpunkt. Her sættes den nederste fanebjælke op hvor man kan navigerer mellem de forskellige skærme og her ligger selve indkøbslisten også.

import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ListeScreen from './screens/ListeScreen'; 
import TilfojScreen from './screens/TilfojScreen';
import DetaljerScreen from './screens/DetaljerScreen';
import HistorikScreen from './screens/HistorikScreen';

const Tab = createBottomTabNavigator();

// Navnet som listen bliver gemt under inde på telefonen.
const GEMME_NOEGLE = 'indkobsliste-varer';

// Første gang appen åbnes er der ikke gemt noget endnu, så starter vi med to eksempel-varer.
const STARTVARER = [
  { id: '1', navn: 'Mælk', antal: '1 liter', koebt: false },
  { id: '2', navn: 'Rugbrød', antal: '1 stk', koebt: false },
];

export default function App() {

  // Her gemmes alle varerne. Listen ligger i App.js, fordi flere skærme skal bruge den.
  const [varer, setVarer] = useState([]);

  // Holder styr på om vi er færdige med at hente den gemte liste fra telefonen.
  // Uden den ville appen nå at gemme en tom liste hen over de rigtige varer, lige når den åbner.
  const [erIndlaest, setErIndlaest] = useState(false);

  // Henter den gemte liste fra telefonen én gang, når appen åbner.
  useEffect(() => {
    async function hentVarer() {
      try {
        const gemteVarer = await AsyncStorage.getItem(GEMME_NOEGLE);
        if (gemteVarer !== null) {
          setVarer(JSON.parse(gemteVarer));
        } else {
          setVarer(STARTVARER);
        }
      } catch (fejl) {
        console.log('Kunne ikke hente den gemte liste:', fejl);
        setVarer(STARTVARER);
      }
      setErIndlaest(true);
    }
    hentVarer();
  }, []);

  // Gemmer listen på telefonen, hver gang den bliver ændret.
  // Det er derfor varerne stadig er der, når man lukker appen og åbner den igen.
  useEffect(() => {
    if (erIndlaest === false) {
      return;
    }
    AsyncStorage.setItem(GEMME_NOEGLE, JSON.stringify(varer));
  }, [varer, erIndlaest]);

  // Lægger den nye vare der er blevet tilføjet fra TilfojScreen nederst i listen.
  function tilfojVare(navn, antal) {
    const nyVare = { id: Date.now().toString(), navn: navn, antal: antal, koebt: false };
    setVarer([...varer, nyVare]);
  }

  // Skifter en vare mellem "skal købes" og "købt".
  // Når en vare er købt, forsvinder den fra listen og dukker op på Historik-skærmen.
  function skiftKoebt(id) {
    const opdateretListe = varer.map(function (vare) {
      if (vare.id === id) {
        return { ...vare, koebt: !vare.koebt };
      }
      return vare;
    });
    setVarer(opdateretListe);
  }

  // Fjerner en vare helt fra listen.
  function sletVare(id) {
    const udenVaren = varer.filter(function (vare) {
      return vare.id !== id;
    });
    setVarer(udenVaren);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>

        {/* De fire faner i bunden. Skærmene får listen og funktionerne med herfra. */}
        <Tab.Screen name="Liste">
          {(props) => <ListeScreen navigation={props.navigation} varer={varer} />}
        </Tab.Screen>

        <Tab.Screen name="Tilfoj">
          {(props) => <TilfojScreen navigation={props.navigation} tilfojVare={tilfojVare} />}
        </Tab.Screen>

        <Tab.Screen name="Historik">
          {() => <HistorikScreen varer={varer} skiftKoebt={skiftKoebt} sletVare={sletVare} />}
        </Tab.Screen>

        <Tab.Screen name="Detaljer">
          {(props) => (
            <DetaljerScreen
              navigation={props.navigation}
              route={props.route}
              varer={varer}
              skiftKoebt={skiftKoebt}
              sletVare={sletVare}
            />
          )}
        </Tab.Screen>

      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
