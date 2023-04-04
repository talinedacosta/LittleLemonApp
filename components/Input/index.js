import { useRef } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Text from '../Text';
import { MaskedTextInput } from 'react-native-mask-text';

const Input = ({ value, onChangeText, label, keyboardType = "default", mask, ...rest }) => {
    const ref = useRef();

    return (
        <View style={css.container}>
            <Text
                type="h5"
                style={css.label}
                onPress={() => ref.current.focus()}>
                {label}
            </Text>

            {
                mask ?
                    (
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
                    ) : (
                        <TextInput
                            style={css.input}
                            ref={ref}
                            value={value}
                            onChangeText={(text) => onChangeText(text)}
                            keyboardType={keyboardType}
                            {...rest}
                        />
                    )
            }
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    label: {
        textTransform: 'capitalize',
    },
    input: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#A6A4A4',
        color: '#333333',
        width: '100%',
        fontSize: 18,
        fontFamily: 'Karla_400Regular'
    },
})

export default Input