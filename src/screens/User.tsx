import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { getUserByName } from "../services/user.service";


interface Name {
    name: string
}

const User = () => {

    const [user, setUser] = useState({ name: undefined, address: undefined, email: undefined });
    const route = useRoute();
    const name = route.params as Name;

    useEffect(() => {
        if (name) {
            getUserByName(name.name)
                .then(resp => {
                    setUser({
                        name: resp[0].name,
                        address: resp[0].address.city,
                        email: resp[0].email
                    });
                })
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.containerHead}>
                <View style={styles.column}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://media.istockphoto.com/id/1327592506/it/vettoriale/icona-segnaposto-della-foto-avatar-predefinita-immagine-del-profilo-grigio-uomo-daffari.jpg?s=612x612&w=0&k=20&c=kOHDYfIV2D5R4MTZqHV9LVujprlHqCLYx6ZpmRHr8w0=',
                        }}
                    />
                </View>
                <View style={styles.column}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 18 }}>{user.name}</Text>
                        <Text style={{ fontSize: 16 }}>{user.address}</Text>
                        <Text style={{ fontSize: 16 }}>{user.email}</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.containerBottom}>
                <Text style={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida orci vitae lorem fringilla, non ullamcorper velit pharetra. Nulla facilisi. Integer nec varius nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at nisi sed libero placerat malesuada. Duis malesuada lorem non quam consequat, nec consectetur odio molestie. Proin mattis vestibulum libero, vel auctor tortor feugiat nec. Morbi id enim ac lorem mollis feugiat. Aenean et pretium odio. Morbi vel justo vestibulum, luctus nisi sit amet, dapibus nunc. Fusce vitae est id sem aliquam tincidunt sit amet vitae urna. Curabitur hendrerit massa a eros sollicitudin, id tempor dolor molestie. Duis eget dictum nunc. Ut dapibus semper dui non feugiat.</Text>
            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHead: {
        flex: 0.5,
        flexDirection: 'row', // Imposta la direzione del layout su "row"
        justifyContent: 'space-between', // Distribuisci gli elementi lungo la riga in modo uniforme
        // alignItems: 'center', // Allinea gli elementi verticalmente al centro
        // paddingHorizontal: 10, // Spazio orizzontale tra le colonne
        paddingVertical: 5, // Spazio verticale tra le righe
        borderWidth: 1, // Bordo per visualizzare i confini della riga (opzionale)
        borderColor: 'gray', // Colore del bordo (opzionale)
        backgroundColor: 'yellow'
    },
    containerBottom: {
        flex: 1
    },
    column: {
        flex: 1, // Imposta la flessibilità delle colonne in modo che si espandano per riempire lo spazio disponibile
        marginHorizontal: 5, // Margine orizzontale tra le colonne
    },
    logo: {
        width: 200,
        height: 200,
    },
    label: {
        fontSize: 24,
    },
    about: {
        fontSize: 26
    }
})

export default User;