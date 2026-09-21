// TilfojScreen er skærmen, hvor man kan tilføje en ny vare ind, som så ender ned i ListeScreen og kan ses derinde

import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import styles from '../styles'

// tilfojVare kommer fra App.js og lægger varen i den fælles liste i ListeScreen
export default function TilfojScreen({ tilfojVare, navigation }) {

    // Husker hvad der står i de to tekstfelter lige nu.
    const [navn, setNavn] = useState('')
    const [antal, setAntal] = useState('')

    // Køres når man trykker på knappen: gemmer varen, tømmer felterne og hopper over på listen. Er navnet tomt, sker der ingenting.
    function gemVare() {
        if (navn === '') {
            return
        }
        tilfojVare(navn, antal)
        setNavn('')
        setAntal('')
        navigation.navigate('Liste')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.overskrift}>Tilføj en vare</Text>

            {/* De to tekstfelter. De opdaterer state, hver gang man taster. */}
            <TextInput
                placeholder="Hvad skal du købe?"
                value={navn}
                onChangeText={setNavn}
                style={styles.input}
            />

            <TextInput
                placeholder="Hvor meget? (fx 2 stk)"
                value={antal}
                onChangeText={setAntal}
                style={styles.input}
            />

            <Button title="Tilføj vare" onPress={gemVare} />

        </View>
    )
}
