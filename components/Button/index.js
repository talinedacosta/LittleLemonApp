import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const Button = ({ onPress, disabled = "false", appearance = "primary", children }) => {
    return (
        <Pressable
            style={[
                css.button,
                appearance === "primary" && css.primary,
                appearance === "secondary" && css.secondary,
                disabled && css.default]}

            onPress={onPress}
            disabled={disabled}

        >
            <Text style={css.text}>{children}</Text>
        </Pressable>
    )
}

const css = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: 10,
        minWidth: 80
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    default: {
        backgroundColor: '#cbd2d9',
        color: '#333333',
        opacity: 0.8
    },
    primary: {
        backgroundColor: '#495E57',
        color: 'white'
    },
    secondary: {
        backgroundColor: '#F4CE14',
        color: '#333333'
    }
})

export default Button