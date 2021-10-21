import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions/decks'
import { createTwoButtonAlert } from '../utils/alert'
import { ADD_CARD_SCREEN, QUIZ_SCREEN } from '../utils/constants'
import CustomButton from './CustomButton'
import Deck from './Deck'

class DeckDetailsScreen extends Component {

    componentDidMount() {
        const { title } = this.props.deck
        this.props.navigation.setOptions({
            title: title
        });
    }

    handleDeleteDeck = () => {
        const { deck, dispatch } = this.props

        const deckId = deck.id

        createTwoButtonAlert(
            "confirmation",
            "Would you like to delete this deck ?",
            () => dispatch(handleDeleteDeck(deckId, () => this.props.navigation.pop()))
        )

    }
    render() {
        const { deck } = this.props

        const deckId = deck.id

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Deck deckId={deckId} />
                </View>
                <View style={styles.btnsContains}>
                    <CustomButton
                        text='Add card'
                        color='white'
                        onPress={() => this.props.navigation.navigate(ADD_CARD_SCREEN, { deckId })} />
                    <CustomButton
                        text='Start Quiz'
                        containerStyle={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'white' }}
                        onPress={() => { this.props.navigation.push(QUIZ_SCREEN, { deckId }) }} />

                    <TouchableOpacity onPress={this.handleDeleteDeck}>
                        <Text style={{ padding: 10, color: 'red' }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnsContains: {
        flex: 1,
        alignItems: 'center',
    }
})

function mapStateToProps({ decks }, { route }) {
    const { deckId } = route.params;

    return {
        deck: decks[deckId]
    }
}

export default connect(mapStateToProps)(DeckDetailsScreen)