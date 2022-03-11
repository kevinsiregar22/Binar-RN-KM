
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Explore from '../screens/Explore/Explore';

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator initialRouteName='Explore' >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
}
