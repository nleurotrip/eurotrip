
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TempPage from './pages/Temp';
import ItineraryPage from './pages/ItineraryPage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
       <Tab.Screen name="Itinerary" component={ItineraryPage} />
       <Tab.Screen name="Settings" component={TempPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;
