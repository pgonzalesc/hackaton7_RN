import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const SocialNetworkItem = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1, borderRadius: 10,backgroundColor: item.backgroundColor}}>
                <View style={styles.containerImage}>
                    <Image 
                        style={styles.image}
                        source={{
                            uri: item.icon,
                        }}
                    />
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.itemDescription}>Description</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: width / 3,
      height: height / 10,
      marginVertical: 10,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    containerText: {
        marginHorizontal: 10,
    },
    containerImage: {
        marginTop:'2.5%',
        marginHorizontal: 5,
    },
    // textView: {
    //   position: 'absolute',
    //   bottom: 25,
    //   margin: 10,
    //   left: 7,
    // },
    image: {
      width: width / 12,
      height: height / 25,
      //borderRadius: 10,
    },
    itemTitle: {
      color: '#FFF',
      fontSize: 16,
      shadowColor: '#000000',
      shadowOffset: {width: 0.8, height: 0.8},
      //textAlign: 'center',
      shadowOpacity: 1,
      shadowRadius: 3,
      //marginBottom: 3,
      fontWeight: 'bold',
      elevation: 5,
    },
    itemDescription: {
      color: '#FFF',
      fontSize: 12,
      shadowColor: '#000000',
      fontWeight: '400',
      marginBottom: 5,
      elevation: 5,
    }
  });

export default SocialNetworkItem;