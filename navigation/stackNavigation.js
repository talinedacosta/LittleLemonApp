import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import Splash from '../components/Splash';
import Onboarding from '../screens/Onboarding';
import Profile from '../screens/Profile';
import Logo from '../components/Logo'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    const { getOnboarding, isLoading, isLogged } = useContext(AuthContext);

    useEffect(() => {
        getOnboarding()
    }, [])


    if (isLoading) {
        return <Splash />
    }

    return (
        <Stack.Navigator>
            <>
                {
                    isLogged ? (
                        <Stack.Screen name="Profile" component={Profile} />
                    ) : (
                        <Stack.Screen
                            name="Onboarding"
                            component={Onboarding}
                            options={{
                                headerShown: false,
                            }}
                        />
                    )
                }
            </>
        </Stack.Navigator>
    )
}

export default StackNavigation