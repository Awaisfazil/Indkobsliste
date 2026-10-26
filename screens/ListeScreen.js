// ListeScreen viser de varer der stadig skal købes. Øverst er der et søgefelt, så man kan finde en bestemt vare i en lang liste.

import React, { useState } from 'react'
import { FlatList, Pressable, Text, TextInput, View } from 'react-native'
import styles from '../styles' // Importerer alle stylesne fra filen styles.js

// varer kommer fra App.js. navigation bruges til at åbne Detaljer.
export default function ListeScreen({ varer, navigation }) {

    // Husker hvad der står i søgefeltet lige nu.
    const [soegetekst, setSoegetekst] = useState('')

    // Finder de varer der skal vises på skærmen: kun dem der ikke er købt endnu,
    // og kun dem hvor navnet passer med det, man har skrevet i søgefeltet.
    // toLowerCase gør at der ikke er forskel på store og små bogstaver.
    const synligeVarer = varer.filter(function (vare) {
        if (vare.koebt === true) {
            return false
        }
        return vare.navn.toLowerCase().includes(soegetekst.toLowerCase())
    })

    return (
        <View style={styles.container}>

            <Text style={styles.overskrift}>Min indkøbsliste</Text>

            {/* Søgefeltet. Hver gang man taster et bogstav, bliver listen nedenunder filtreret. */}
            <TextInput
                placeholder="Søg efter en vare"
                value={soegetekst}
                onChangeText={setSoegetekst}
                style={styles.input}
            />

            {/* FlatList viser indkøbslisten. Man beskriver kun én række,
                så gentager den selv resten. Trykker man på en række,
                åbnes Detaljer med den valgte vare. */}
            <FlatList
                data={synligeVarer}
                keyExtractor={(vare) => vare.id}
                ListEmptyComponent={
                    <Text style={styles.besked}>Der er ingen varer at vise.</Text>
                }
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Detaljer', { vareId: item.id })}>
                        <View style={styles.vareRaekke}>
                            <Text style={styles.vareNavn}>{item.navn}</Text>
                            <Text style={styles.vareAntal}>{item.antal}</Text>
                        </View>
                    </Pressable>
                )}
            />

        </View>
    )
}
