// ListeScreen viser alle de forskellige varer på indkøbslisten.

import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import styles from '../styles' // Importerer alle stylesne fra filen styles.js

// varer kommer fra App.js. navigation bruges til at åbne Detaljer.
export default function ListeScreen({ varer, navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.overskrift}>Min indkøbsliste</Text>

            {/* FlatList viser indkøbslisten. Man beskriver kun én række,
                så gentager den selv resten. Trykker man på en række,
                åbnes Detaljer med den valgte vare. */}
            <FlatList
                data={varer}
                keyExtractor={(vare) => vare.id}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Detaljer', { vare: item })}>
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
