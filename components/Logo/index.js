import React from 'react'
import { Image } from 'react-native'

const Logo = () => {
    return (
        <Image
            source={require('../../assets/logo.png')}
            style={{ width: 300, height: 50 }}
            resizeMode='contain'
        />
    )
}

export default Logo