import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const Profile = ({data}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{
                uri: data[0].icon,
                }}
                style={styles.iconCard}
            />
            <View style={styles.dataUser}>
                <Text style={styles.textUser} > {data[0].user} </Text>
                <Text style={styles.textFollower}>{data[0].followers} Followers</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
    },
    dataUser: {
        margin: 20,
    },
    textUser: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textFollower: {
        fontSize: 14,
        color: '#212121',
        fontWeight: '400',
        marginLeft:2,
    },
    iconCard: {
        width: 50, 
        height: 50,
        marginTop: 20,
        marginLeft: 15,
        borderRadius: 30,
        borderWidth:1.8,
        borderColor: 'violet'
    },
});
export default Profile;