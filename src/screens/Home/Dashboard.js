import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import SocialNetworkSlider from '../../components/Slider/SocialNetworkSlider';
import {socialNetworkData} from '../../resource/functions/data/socialNetworkData';
import Profile from '../../components/Profile/Profile';
import {profileData} from '../../resource/functions/data/profileData';
import Songs from '../../components/Songs/Songs';
import {songsData} from '../../resource/functions/data/songsData';

const Dashboard = () => {
    return  (
        <SafeAreaView style={styles.container}>
            <View style={styles.panelProfile}>
                <Profile data={profileData}/>
            </View>
            <View style={styles.panelSlider}>
                <Text style={styles.title}>My social networks</Text>
                <SocialNetworkSlider data={socialNetworkData}/> 
            </View>
            <ScrollView style={styles.panelSongs}>
                <Text style={styles.title}>My favourite songs</Text>
                <Songs data={songsData}/>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: '5%',
    },
    panelProfile: {
        flex: 1, 
        borderBottomWidth: 1,
        paddingBottom: 30
    },
    panelSlider: {
        flex: 2, 
        flexDirection: 'column',
        paddingTop: 20,
        //borderWidth:2,
        //height: 50
    },
    panelSong: {
        flex: 2, 
        paddingTop: 20
    },
    title: {
      fontSize: 20,
      marginTop: 10,
      marginLeft:5,
      //marginHorizontal: 20,
      fontWeight: 'bold',
    },
  });

export default Dashboard;