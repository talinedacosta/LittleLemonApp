import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Avatar = ({ source, alt }) => {

    const firstName = alt[0];
    const lastName = alt.split(' ')[1] ? alt.split(' ')[1][0] : '';

    return (
        <View style={css.content}>
            {!source &&
                (<Text
                    style={css.text}>
                    {`${firstName}${lastName}`}
                </Text>)
            }

            {source &&
                (<Image
                    resizeMode="cover"
                    source={{ uri: source }}
                    style={css.image} />)
            }
        </View>
    )
}


const css = StyleSheet.create({
    text: {
        fontSize: 45,
        alignSelf: 'stretch',
        textAlign: 'center'
    },
    content: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#F4CE14',
        color: "#333333",
        overflow: 'hidden'
    },
    image: {
        width: 100,
        height: 100,
    }
})

export default Avatar