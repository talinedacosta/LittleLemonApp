import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    const getData = async () => {
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

    const setData = async () => {
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

    return (
        <AuthContext.Provider
            value={{ isLogged, isLoading, getData, setData }}>
            {children}
        </AuthContext.Provider>
    )
}