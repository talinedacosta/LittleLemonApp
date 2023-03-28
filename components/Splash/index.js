import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native';

const Splash = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
    );
}

export default Splash