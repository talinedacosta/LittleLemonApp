import { useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text';

const InputMasked = ({ value, onChangeText, label, mask, keyboardType = "default", ...rest }) => {
    const ref = useRef();

    return (
        <View style={css.container}>
            <Text
                style={css.label}
                onPress={() => ref.current.focus()}>
                {label}
            </Text>

            <MaskedTextInput
                onChangeText={(text) => {
                    onChangeText(text)
                }}
                value={value}
                keyboardType={keyboardType}
                style={css.input}
                mask={mask}
                {...rest}
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

export default InputMasked