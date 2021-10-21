import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions/decks'
import { ADD_CARD_SCREEN, QUIZ_SCREEN } from '../utils/constants'
import CustomButton from './CustomButton'
import Deck from './Deck'

class DeckDetailsScreen extends Component {

    handleDeleteDeck = () => {
        const { deckId } = this.props
        this.props.dispatch(handleDeleteDeck(deckId, () => this.props.navigation.pop()))
    }
    render() {
        const { deckId } = this.props
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

function mapStateToProps({ }, { route }) {
    const { deckId } = route.params;
    return {
        deckId
    }
}

export default connect(mapStateToProps)(DeckDetailsScreen)