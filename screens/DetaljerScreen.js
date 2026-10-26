// DetaljerScreen viser den vare, man har trykket på ude fra indkøbslisten på ListeScreen.
// Fra godkendelsesopgave 2 kan man også markere varen som købt eller slette den herfra.

import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../styles'

// route indeholder id'et på den vare, der blev sendt med fra ListeScreen.
export default function DetaljerScreen({ route, navigation, varer, skiftKoebt, sletVare }) {

    // Man kan også trykke direkte på fanen uden at have valgt en vare, så står der ikke noget id.
    const valgtId = route.params ? route.params.vareId : null

    // Varen findes frem i den fælles liste ud fra id'et. På den måde passer detaljerne altid
    // med listen, også hvis varen lige er blevet ændret eller slettet et andet sted i appen.
    const vare = varer.find(function (enVare) {
        return enVare.id === valgtId
    })

    // Ingen vare valgt, eller varen er slettet: vis en besked i stedet for at appen crasher.
    if (vare === undefined) {
        return (
            <View style={styles.midtPaaSkaermen}>
                <Text style={styles.besked}>
                    Tryk på en vare på listen for at se detaljer om den.
                </Text>
            </View>
        )
    }

    // Køres når man markerer varen som købt. Varen flytter over på Historik-skærmen,
    // så vi hopper tilbage til listen bagefter.
    function markerSomKoebt() {
        skiftKoebt(vare.id)
        navigation.navigate('Liste')
    }

    // Køres når man sletter varen. Den forsvinder helt, så vi hopper tilbage til listen.
    function fjernVaren() {
        sletVare(vare.id)
        navigation.navigate('Liste')
    }

    // Hvis der er valgt en vare fra indkøbslisten, vises dens navn og mængde sammen med knapperne.
    return (
        <View style={styles.container}>

            <Text style={styles.overskrift}>Detaljer</Text>

            <Text style={styles.detaljeNavn}>Vare: {vare.navn}</Text>
            <Text style={styles.detaljeAntal}>Mængde: {vare.antal}</Text>

            {/* De to nye knapper fra godkendelsesopgave 2. */}
            <View style={styles.knapAfstand}>
                <Button title="Markér som købt" onPress={markerSomKoebt} />
            </View>

            <View style={styles.knapAfstand}>
                <Button title="Slet vare" color="#b33a3a" onPress={fjernVaren} />
            </View>

            <View style={styles.knapAfstand}>
                <Button title="Tilbage til listen" onPress={() => navigation.navigate('Liste')} />
            </View>

        </View>
    )
}
