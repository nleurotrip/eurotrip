
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

import TempPage from './pages/Temp';
import ItineraryPage from './pages/ItineraryPage';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
       <Tab.Screen 
        name="Itinerary" 
        component={ItineraryPage} 
        options={{
          tabBarIcon: ({size,focused,color}) => {
              return (
                <Icon
                  name="list-alt"
                  style={{ width: size, height: size }}
                  type="material"
                  color="lightblue"
                />
              );
            }
        }}
      />
       <Tab.Screen name="Points of Interest" component={TempPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;
