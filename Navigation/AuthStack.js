import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Components/Login';
import Register from '../Components/Registro';
import Forget from '../Components/Olvido';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Registro' component={Register} />
                <Stack.Screen name='Olvido' component={Forget} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default AuthStack;