
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TempPage from './pages/Temp';
import ItineraryPage from './pages/ItineraryPage';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
       <Tab.Screen name="Itinerary" component={ItineraryPage} />
       <Tab.Screen name="Settings" component={TempPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;
