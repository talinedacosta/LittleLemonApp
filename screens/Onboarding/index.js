import React, { useState, useContext } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SafeView from '../../components/SafeView';
import { AuthContext } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Onboarding() {
    const { setOnboarding } = useContext(AuthContext);

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const setPersonalInformation = async () => {
        try {
            const jsonValue = JSON.stringify(
                {
                    'firstName': firstName,
                    'email': email
                })

            await AsyncStorage.setItem('@personal_information', jsonValue)
        } catch (error) {
            Alert.alert('Error saving data, please try again.')
        }
    }

    const handleSubmit = () => {
        setPersonalInformation();
        setOnboarding();
    }

    return (
        <SafeView>
            <ScrollView contentContainerStyle={css.scrollview}>
                <View style={css.header}>
                    <Image
                        style={css.image}
                        source={require('../../assets/logo.png')}
                        resizeMode='contain' />
                </View>

                <View style={css.content}>

                    <Text style={css.title}>Let us get to know you</Text>

                    <View>
                        <Input
                            value={firstName}
                            onChangeText={setFirstName}
                            label="First Name"
                        />
                        <Input
                            value={email}
                            onChangeText={setEmail}
                            label="Email"
                            keyboardType="email-address"
                        />
                    </View>
                </View>

                <View style={css.footer}>
                    <Button
                        onPress={() => handleSubmit()}
                        disabled={!firstName || !email}>
                        Next</Button>
                </View>
            </ScrollView>
        </SafeView>
    );
}

const css = StyleSheet.create({
    scrollview: {
        flexGrow: 1
    },
    header: {
        backgroundColor: '#dee3e9',
        paddingHorizontal: 40,
        paddingTop: 20,
        flex: 0.1,
    },
    image: {
        width: 300,
        height: 55,
        alignSelf: 'center'
    },
    content: {
        backgroundColor: '#cbd2d9',
        justifyContent: 'space-between',
        flex: 1,
        padding: 40
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    footer: {
        flex: 0.02,
        backgroundColor: '#dee3e9',
        padding: 40,
        alignItems: 'flex-end'
    }
})

export default Onboarding