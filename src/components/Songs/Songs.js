import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Songs = ({data}) => {
    return (
        <>
            { data.map(item => (
              <View style={styles.container}>
                    <View style={styles.containerSong}>
                        <Text style={styles.textName}>{item.name}</Text>
                        <Text style={styles.textDescription}>{item.description}</Text>
                    </View>
                    <View>
                        <Image
                            source={{
                            uri: item.photo,
                            }}
                            style={styles.iconCard}
                        />
                    </View>
              </View>
            ))} 
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
    },
    containerSong: {
        flex: 1,
        //flexDirection: 'row',
        backgroundColor: '#B4CCF0',
        padding: 10,
        marginBottom: 10,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
    },
    textName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 14,
        fontWeight: '300',
    },
    iconCard: {
        width: 50, 
        height: 59,
        //marginTop: 20,
        //marginLeft: 15,
        //borderRadius: 30,
        //borderWidth:1.8,
        //borderTopEndRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
});

export default Songs;