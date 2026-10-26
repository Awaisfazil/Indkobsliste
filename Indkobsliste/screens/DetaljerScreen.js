// DetaljerScreen viser den vare, man har trykket på ude fra indkøbslisten på ListeScreen.

import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../styles'

// route indeholder den vare, der blev sendt med fra ListeScreen.
export default function DetaljerScreen({ route, navigation }) {

    // Man kan også trykke direkte på fanen uden at have valgt en vare, så vises der bare en tekst besked. Derfor bliver der tjekket først, om der overhovedet er sendt en vare med.
    const vare = route.params ? route.params.vare : null

    // Ingen vare valgt: vis en besked i stedet for at crashe.
    if (vare === null) {
        return (
            <View style={styles.midtPaaSkaermen}>
                <Text style={styles.besked}>
                    Tryk på en vare på listen for at se detaljer om den.
                </Text>
            </View>
        )
    }

    // Hvis der istedet vælges en vare fra indkøbslisten, vises dens navn og mængde.
    return (
        <View style={styles.container}>

            <Text style={styles.overskrift}>Detaljer</Text>

            <Text style={styles.detaljeNavn}>Vare: {vare.navn}</Text>
            <Text style={styles.detaljeAntal}>Mængde: {vare.antal}</Text>

            <Button title="Tilbage til listen" onPress={() => navigation.navigate('Liste')} />

        </View>
    )
}
