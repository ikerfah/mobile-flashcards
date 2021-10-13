import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"


export default CustomButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.container, props.containerStyle]}>
                <Text style={[styles.text, props.textStyle]}>{props.text ?? ''}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 7,
        borderColor: 'black',
        borderWidth: 2,
        width: 250,
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        alignSelf: 'center',
    }
})