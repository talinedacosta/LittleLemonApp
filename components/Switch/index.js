import React from 'react'
import { StyleSheet, Switch as DefaultSwitch, View, Platform } from 'react-native'
import Text from '../Text'

const Switch = ({ label, toggleSwitch, isEnabled }) => {
    return (
        <View style={css.container}>
            <DefaultSwitch
                trackColor={{ false: '#767577', true: '#e3bf0b' }}
                thumbColor={isEnabled ? '#F4CE14' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text type="h5">{label}</Text>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        marginVertical: Platform.OS === 'ios' ? 5 : 0,
    }
})
export default Switch