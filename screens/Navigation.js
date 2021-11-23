import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Home from './Home';
import AddData from './data/Add_Data';
import Home from './home/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'Relevés kilométrique',
          }}
        />
        <Stack.Screen
          name="data"
          component={AddData}
          options={{
            title: 'Ajouter des Data',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
