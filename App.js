// App.js er appens startpunkt. Her sættes den nederste fanebjælke op hvor man kan navigerer mellem de forskellige skræme og her ligger selve indkøbslisten osgå.

import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListeScreen from './screens/ListeScreen';
import TilfojScreen from './screens/TilfojScreen';
import DetaljerScreen from './screens/DetaljerScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  // Her gemmes alle varerne. Listen ligger i App.js, fordi to skærme skal bruge den.
  const [varer, setVarer] = useState([
    { id: '1', navn: 'Mælk', antal: '1 liter' },
    { id: '2', navn: 'Rugbrød', antal: '1 stk' },
  ]);

  // Lægger den ny vare der er blevet tilføjet fra tilføjScreen nederst i listen. Bruges af Tilføj-skærmen.
  function tilfojVare(navn, antal) {
    const nyVare = { id: Date.now().toString(), navn: navn, antal: antal };
    setVarer([...varer, nyVare]);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>

        {/* De tre faner i bunden. Liste og Tilføj får listen og funktionen med. */}
        <Tab.Screen name="Liste">
          {(props) => <ListeScreen navigation={props.navigation} varer={varer} />}
        </Tab.Screen>

        <Tab.Screen name="Tilfoj">
          {(props) => <TilfojScreen navigation={props.navigation} tilfojVare={tilfojVare} />}
        </Tab.Screen>

        <Tab.Screen name="Detaljer" component={DetaljerScreen} />

      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
