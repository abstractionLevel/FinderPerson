import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const HomeScreen = ({ navigation }: any) => {

    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
        console.log(`Ricerca utente: ${searchInput}`);
    };

    const handleFindAllUsers = () => {
        console.log('Ricerca di tutti gli utenti...');
    };
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="digita il nome"
                    value={searchInput}
                    onChangeText={setSearchInput}
                    style={styles.input}
                />
                <Button title="Cerca" onPress={handleSearch} />
            </View>
            <View style={styles.findAllContainer}>
                <Button title="Trova tutti gli utenti" onPress={() =>
                    navigation.navigate("Users")
                }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchContainer: {
        marginBottom: 20,
        width: '80%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        height: 40,
        width: '100%'
    },
    findAllContainer: {
        width: '80%',
        marginTop: 20,
    },

});

export default HomeScreen;

function alert(arg0: string) {
    throw new Error("Function not implemented.");
}
