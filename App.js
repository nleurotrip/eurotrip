import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* //dux provider goes here */}
      <Navigation />
    </SafeAreaProvider>
  )
};

export default App;
