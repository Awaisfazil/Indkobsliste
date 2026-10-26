// styles.js indeholder alt styling for appen.
// Skærmene importerer stylesne herfra, så tingene ser ens ud og så man kun skal rette ét sted, hvis noget skal ændres.

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    // Ramme til skærme med indhold øverst
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        paddingHorizontal: 20,
    },

    // Ramme når indholdet skal stå midt på skærmen
    midtPaaSkaermen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    // Overskriften øverst på alle tre skærme
    overskrift: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1f6f4a',
        marginBottom: 20,
    },

    // Én række i indkøbslisten
    vareRaekke: {
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    vareNavn: {
        fontSize: 18,
    },

    vareAntal: {
        fontSize: 14,
        color: 'gray',
    },

    // Bruges af begge tekstfelter på Tilføj-skærmen
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
    },

    detaljeNavn: {
        fontSize: 20,
        marginBottom: 10,
    },

    detaljeAntal: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 40,
    },

    besked: {
        fontSize: 18,
        textAlign: 'center',
    },

})

export default styles
