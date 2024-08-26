import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text>Hello React Native</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
