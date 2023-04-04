import { View, Text, StyleSheet, Image } from 'react-native';

const Avatar = ({ source, alt, size = "default" }) => {
    const words = alt.split(' ');
    const firstName = words[0].charAt(0);
    const lastName = words[words.length - 1].charAt(0);

    return (
        <View style={[css.content,
        size === 'small' ?
            {
                width: 50,
                height: 50,
            } :
            {
                width: 80,
                height: 80,
            }]}>
            {!source &&
                (<Text
                    style={
                        [css.text,
                        size === 'small' ? { fontSize: 25 } : { fontSize: 40 }]}>
                    {`${firstName}${lastName}`}
                </Text>)
            }

            {source &&
                (<Image
                    resizeMode="cover"
                    source={{ uri: source }}
                    style={[css.image,
                    size === 'small' ?
                        {
                            width: 50,
                            height: 50,
                        } :
                        {
                            width: 80,
                            height: 80,
                        }
                    ]} />)
            }
        </View>
    )
}


const css = StyleSheet.create({
    text: {
        alignSelf: 'stretch',
        textAlign: 'center'
    },
    content: {
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#F4CE14',
        color: "#333333",
        overflow: 'hidden',
        marginVertical: 0
    }
})

export default Avatar