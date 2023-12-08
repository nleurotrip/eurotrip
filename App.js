
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TempPage from './pages/Temp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
       <Tab.Screen name="Temp" component={TempPage} />
       <Tab.Screen name="Settings" component={TempPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
