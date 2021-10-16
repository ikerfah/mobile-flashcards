import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const Deck = (props) => {
    const { title, questions } = props.deck

    const numberOfCards = questions.length

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{numberOfCards + ' ' + (numberOfCards <= 1 ? 'card' : 'cards')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        justifyContent: 'center',
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

function mapStateToProps({ decks }, { deckId }) {
    return {
        deck: decks[deckId]
    }
}

export default connect(mapStateToProps)(Deck)