
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

import TempPage from './pages/Temp';
import ItineraryPage from './pages/ItineraryPage';
import MapPage from './pages/MapPage';
import AssistantPage from './pages/AssistantPage';

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
                  color={color}
                />
              );
            }
        }}
      />
       <Tab.Screen name="Points of Interest" component={MapPage} />
       <Tab.Screen 
        name="Assistant" 
        component={AssistantPage} 
        options={{
          tabBarIcon: ({size,focused,color}) => {
              return (
                <Icon
                  name="account"
                  style={{ width: size, height: size }}
                  type="material-community"
                  color={color}
                />
              );
            }
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;
