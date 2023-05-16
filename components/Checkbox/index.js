import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CheckboxDefault from 'expo-checkbox';

const Checkbox = ({ label, value }) => {
    return (
        <View style={styles.checkboxContainer}>
            <CheckboxDefault
                style={styles.checkbox}
                value={value}
                color={value ? '#F4CE14' : undefined}
            />
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
});

export default Checkbox;