// HistorikScreen er den nye skærm fra anden iteration. Den viser de varer man allerede har købt,
// så man kan se hvad man plejer at handle. Herfra kan man lægge en vare tilbage på listen eller slette den helt.

import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import styles from '../styles'

// varer kommer fra App.js sammen med de to funktioner, der ændrer i listen.
export default function HistorikScreen({ varer, skiftKoebt, sletVare }) {

    // Her vises kun de varer, der er markeret som købt.
    const koebteVarer = varer.filter(function (vare) {
        return vare.koebt === true
    })

    return (
        <View style={styles.container}>

            <Text style={styles.overskrift}>Købte varer</Text>

            <FlatList
                data={koebteVarer}
                keyExtractor={(vare) => vare.id}
                ListEmptyComponent={
                    <Text style={styles.besked}>Du har ikke købt nogen varer endnu.</Text>
                }
                renderItem={({ item }) => (
                    <View style={styles.vareRaekke}>
                        <Text style={styles.vareNavn}>{item.navn}</Text>
                        <Text style={styles.vareAntal}>{item.antal}</Text>

                        {/* De to knapper hører til den enkelte vare i rækken. */}
                        <View style={styles.knapRaekke}>
                            <Button title="Læg tilbage" onPress={() => skiftKoebt(item.id)} />
                            <Button title="Slet" color="#b33a3a" onPress={() => sletVare(item.id)} />
                        </View>
                    </View>
                )}
            />

        </View>
    )
}
