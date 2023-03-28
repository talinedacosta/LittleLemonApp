import { useRef } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({ value, onChangeText, label, keyboardType }) => {
    const ref = useRef();

    return (
        <View style={css.container}>
            <Text
                style={css.label}
                onPress={() => ref.current.focus()}>
                {label}
            </Text>

            <TextInput
                style={css.input}
                ref={ref}
                value={value}
                onChangeText={(text) => onChangeText(text)}
                keyboardType={keyboardType}
            />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
    },
    label: {
        fontSize: 16,
        textTransform: 'capitalize',
        textAlign: 'center',
        color: '#333333',
        fontSize: 24
    },
    input: {
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#333333',
        alignSelf: 'stretch',
        height: 50,
        padding: 10,
        fontSize: 18
    },
})

export default Input