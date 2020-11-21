import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Dashboard from './src/screens/Home/Dashboard';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Dashboard />
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
