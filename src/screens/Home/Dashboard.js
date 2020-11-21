import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SocialNetworkSlider from '../../components/Slider/SocialNetworkSlider';
import {socialNetworkData} from '../../resource/functions/data/socialNetworkData';

const Dashboard = () => {
    return  (
        <>
            <View style={{flex: 1}}>
                <Text style={styles.title}>My social networks</Text>
                <SocialNetworkSlider data={socialNetworkData} />
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      marginTop: 10,
      marginHorizontal: 20,
      fontWeight: 'bold',
    },
  });

export default Dashboard;