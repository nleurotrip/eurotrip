import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './Navigation';
import { ThemeProvider } from '@rneui/themed';
import theme from './theme.js';
const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* //dux provider goes here */}
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  )
};

export default App;
