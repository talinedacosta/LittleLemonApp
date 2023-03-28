import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'

const SafeView = ({ children, customStyle, ...rest }) => {
    return (
        <SafeAreaView
            style={[css.container, customStyle]}
            {...rest}>
            {children}
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})

export default SafeView