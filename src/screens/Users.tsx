import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { getUsers } from "../services/user.service";

const Users = () => {

    const [users, setUsers] = useState([]);

    type itemProps = {
        name:string,
        email:string
    }

    const ItemCard  = (user:itemProps) => (
        <View style={styles.item}>
            <Text style={styles.label}>{user.name}</Text>
            <Text>{user.email}</Text>
        </View>
    );

    useEffect(() => {
        getUsers().then(resp => setUsers(resp))
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({item}) => <ItemCard {...item} />}
                keyExtractor={(item:any) => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    label: {
        fontSize:32,
    }
})
export default Users;