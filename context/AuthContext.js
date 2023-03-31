import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    const getOnboarding = async () => {
        try {
            const value = await AsyncStorage.getItem('@onboarding');
            if (value !== null) {
                setIsLogged(true)
            }
        } catch (error) {
            setIsLogged(null)
        } finally {
            setIsLoading(false)
        }
    }

    const setOnboarding = async () => {
        try {
            setIsLoading(true)
            await AsyncStorage.setItem('@onboarding', 'logged')
            setIsLogged("logged")
        } catch (error) {
            setIsLogged(null)
        } finally {
            setIsLoading(false)
        }
    }

    const logout = async () => {
        try {
            await AsyncStorage.clear()
            setIsLogged(false)
        } catch (error) {
            Alert.alert('Erro. Try again.')
        }
    }

    return (
        <AuthContext.Provider
            value={{ isLogged, isLoading, getOnboarding, setOnboarding, logout }}>
            {children}
        </AuthContext.Provider>
    )
}