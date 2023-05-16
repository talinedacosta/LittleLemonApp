import { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Splash from '../../components/Splash';
import Switch from '../../components/Switch';
import Avatar from '../../components/Avatar';
import Text from '../../components/Text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckBox } from 'react-native-web';
import Checkbox from '../../components/Checkbox';

const Profile = ({ navigation }) => {
    const [user, setUser] = useState({});
    const [avatar, setAvatar] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        try {
            const jsonValue = JSON.stringify({ ...user, avatar: avatar });
            await AsyncStorage.mergeItem('@ll_user', jsonValue);
        } catch (error) {
            Alert.alert('Houve um erro, tente novamente.')
        } finally {
            setIsLoading(false);
        }
    }

    const logout = async () => {
        setIsLoading(true);
        try {
            await AsyncStorage.clear();
            navigation.navigate('Onboarding');
        } catch (e) {
            Alert.alert('Houve um erro, tente novamente.')
        } finally {
            setIsLoading(false);
        }
    }

    const getData = async () => {
        try {
            const storagedUser = await AsyncStorage.getItem('@ll_user');
            if (storagedUser !== null) {
                setUser(JSON.parse(storagedUser))
            } else {
                navigation.navigate('Onboarding');
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getData();
    }, []);

    return (
        <SafeAreaView style={css.container}>
            <View style={css.content}>
                <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                    {isLoading && <Splash />}

                    <Text type="h2">Personal information</Text>

                    <Text type="h5">Avatar</Text>

                    <View style={css.avatar}>
                        <Avatar
                            alt={`${user.firstName} ${user.lastName}`}
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
                            onChangeText={(text) => setUser({ ...user, firstName: text })}
                            value={user.firstName} />

                        <Input
                            label="Last Name"
                            onChangeText={(text) => setUser({ ...user, lastName: text })}
                            value={user.lastName} />

                        <Input
                            label="Email"
                            onChangeText={(text) => setUser({ ...user, email: text })}
                            value={user.email}
                            keyboardType="email-address" />

                        <Input
                            label="Phone Number"
                            onChangeText={(text) => setUser({ ...user, phoneNumber: text })}
                            value={user.phoneNumber}
                            keyboardType="phone-pad"
                            mask="(999) 999-9999"
                        />
                    </View>

                    <View style={css.notifications}>
                        <Text type="h2">Email notifications</Text>
                        <Checkbox label='Order statuses' value={true} />
                        <Checkbox label='Password changes' value={true} />
                        <Checkbox label='Special offers' value={true} />
                        <Checkbox label='Newsletter' value={false} />
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