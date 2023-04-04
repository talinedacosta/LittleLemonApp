import React from 'react';
import { Text as DefaultText, StyleSheet } from 'react-native';

const Text = ({ children, type, style }) => {
    return (
        <DefaultText style={[css[type], style]}>{children}</DefaultText>
    )
}

const css = StyleSheet.create({
    h1: {
        fontFamily: 'MarkaziText_500Medium',
        fontWeight: '500',
        fontSize: 64,
        color: '#000000'
    },
    h2: {
        fontFamily: 'MarkaziText_400Regular',
        fontWeight: '400',
        fontSize: 40,
        color: '#000000'
    },
    lead: {
        fontFamily: 'Karla_500Medium',
        fontWeight: '500',
        fontSize: 18,
        color: '#000000'
    },
    h3: {
        fontFamily: 'Karla_800ExtraBold',
        fontWeight: '800',
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#000000'
    },
    h4: {
        fontFamily: 'Karla_800ExtraBold',
        fontWeight: '800',
        fontSize: 16,
        color: '#000000'
    },
    h5: {
        fontFamily: 'Karla_700Bold',
        fontWeight: '700',
        fontSize: 18,
        color: '#000000'
    },
    paragraph: {
        fontFamily: 'Karla_400Regular',
        fontWeight: '400',
        fontSize: 16,
        color: '#000000'
    },
    highlight: {
        fontFamily: 'Karla_500Medium',
        fontWeight: '500',
        fontSize: 16,
        color: '#000000'
    }

});

export default Text;