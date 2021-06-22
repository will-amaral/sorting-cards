import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import List from './src/List';
import data from './src/data';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar style='auto' />
        <List data={data} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
