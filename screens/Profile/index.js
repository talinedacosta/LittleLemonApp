import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Splash from '../../components/Splash'
import Switch from '../../components/Switch'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../../context/AuthContext'
import Avatar from '../../components/Avatar'
import Text from '../../components/Text'

const Profile = () => {
    const { logout, isLoading } = useContext(AuthContext);

    const [avatar, setAvatar] = useState(null);
    const [personalInformation, setPersonalInformation] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    })
    const [emailNotifications, setEmailNotifications] = useState({
        orderStatuses: true,
        passwordChanges: true,
        specialOffers: true,
        newsletter: true
    })

    const pickAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
            allowsMultipleSelection: false
        })

        if (!result.canceled) {
            setAvatar(result.assets[0].uri)
        }
    }

    const handleRemoveAvatar = () => {
        setAvatar(null)
    }

    const storeData = async () => {
        const personalInformationKey = ['@personal_information', JSON.stringify(personalInformation)]

        const emailNotificationsKey = ['@email_notifications', JSON.stringify(emailNotifications)]

        const avatarKey = ['@avatar', (avatar ? avatar : '')]

        try {
            await AsyncStorage.multiSet([personalInformationKey, emailNotificationsKey, avatarKey]);
        } catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {
        try {
            const result = await AsyncStorage.multiGet(['@personal_information', '@email_notifications', '@avatar'])

            const personalInformationStorage = result[0] ? JSON.parse(result[0][1]) : {};
            const emailNotificationsStorage = result[1] ? JSON.parse(result[1][1]) : {}
            const avatarStorage = result[2] ? result[2][1] : ''

            setPersonalInformation({
                ...personalInformation,
                ...personalInformationStorage
            })

            setEmailNotifications({
                ...emailNotifications,
                ...emailNotificationsStorage
            })

            setAvatar(avatarStorage)


        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getData();
    }, [])

    return (
        <SafeAreaView style={css.container}>
            <View style={css.content}>
                <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                    {isLoading && <Splash />}

                    <Text type="h2">Personal information</Text>

                    <Text type="h5">Avatar</Text>

                    <View style={css.avatar}>
                        <Avatar
                            alt={`${personalInformation.firstName} ${personalInformation.lastName}`}
                            source={avatar} />

                        <Button onPress={pickAvatar}>
                            {avatar ? 'Change' : 'Add'}
                        </Button>

                        <Button
                            onPress={handleRemoveAvatar}
                            appearance='outline'
                            disabled={!avatar}
                        >
                            Remove
                        </Button>
                    </View>

                    <View style={css.form}>
                        <Input
                            label="First Name"
                            onChangeText={(text) => setPersonalInformation({ ...personalInformation, firstName: text })}
                            value={personalInformation.firstName} />

                        <Input
                            label="Last Name"
                            onChangeText={(text) => setPersonalInformation({ ...personalInformation, lastName: text })}
                            value={personalInformation.lastName} />

                        <Input
                            label="Email"
                            onChangeText={(text) => setPersonalInformation({ ...personalInformation, email: text })}
                            value={personalInformation.email}
                            keyboardType="email-address" />

                        <Input
                            label="Phone Number"
                            onChangeText={(text) => setPersonalInformation({ ...personalInformation, phoneNumber: text })}
                            value={personalInformation.phoneNumber}
                            keyboardType="phone-pad"
                            mask="(999) 999-9999"
                        />
                    </View>

                    <View style={css.notifications}>
                        <Text type="h2">Email notifications</Text>

                        <Switch label="Order statuses"
                            toggleSwitch={
                                () => setEmailNotifications(
                                    {
                                        ...emailNotifications,
                                        orderStatuses: !emailNotifications.orderStatuses
                                    }
                                )
                            }
                            isEnabled={emailNotifications.orderStatuses}
                        />

                        <Switch label="Password changes"
                            toggleSwitch={
                                () => setEmailNotifications(
                                    {
                                        ...emailNotifications,
                                        passwordChanges: !emailNotifications.passwordChanges
                                    }
                                )
                            }
                            isEnabled={emailNotifications.passwordChanges}
                        />


                        <Switch label="Special offers"
                            toggleSwitch={
                                () => setEmailNotifications(
                                    {
                                        ...emailNotifications,
                                        specialOffers: !emailNotifications.specialOffers
                                    }
                                )
                            }
                            isEnabled={emailNotifications.specialOffers}
                        />

                        <Switch label="Newsletter"
                            toggleSwitch={
                                () => setEmailNotifications(
                                    {
                                        ...emailNotifications,
                                        newsletter: !emailNotifications.newsletter
                                    }
                                )
                            }
                            isEnabled={emailNotifications.newsletter}
                        />
                    </View>


                    <Button appearance='secondary' onPress={logout}>Log out</Button>

                    <View style={css.footer}>
                        <Button onPress={getData} appearance='outline'>Discard changes</Button>
                        <Button onPress={storeData}>Save changes</Button>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#f9f9f9',
    },
    avatar: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 15,
        marginTop: 10
    },
    form: {
        gap: 10,
        marginBottom: 15
    },
    notifications: {
        marginVertical: 15
    },
    footer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
})

export default Profile