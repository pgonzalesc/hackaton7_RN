import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Dashboard from './src/screens/Home/Dashboard';
import Actividad2 from './src/screens/Home/Actividad2'

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Dashboard />
        {/* <Actividad2 /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
