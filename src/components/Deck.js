import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Deck = (props) => {
    const { title, numberOfCards } = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{numberOfCards + ' ' + (numberOfCards <= 1 ? 'card' : 'cards')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:150,
        justifyContent:'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    subtitle: {
        fontSize: 12,
        alignSelf: 'center',
        color: '#727070'
    }
})