import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Text from '../Text'

const Button = ({ onPress, disabled = false, appearance = "primary", children }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.7 : 1
                },
                css.button,
                css[appearance],
                disabled && css.default
            ]}
            onPress={onPress}
            disabled={disabled}
            accessibilityRole="button"

        >
            <Text type="h4" style={[css.text, appearance === "primary" ? { color: '#ffffff' } : { color: "#333333" }]}>{children}</Text>
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
    },
    default: {
        backgroundColor: '#cbd2d9',
        opacity: 0.8
    },
    primary: {
        backgroundColor: '#495E57',
    },
    secondary: {
        backgroundColor: '#F4CE14',
    },
    outline: {
        backgroundColor: '#ffffff',
        borderColor: '#495E57',
        borderWidth: 1,
    }
})

export default Button