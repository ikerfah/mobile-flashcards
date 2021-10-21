import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { QUIZ_SCREEN } from '../utils/constants'
import CustomButton from './CustomButton'

class ScoreScreen extends Component {
    componentDidMount() {
        this.props.navigation.setOptions({
            title: 'Score'
        });
    }

    render() {
        const { deck, correctAnswers, incorrectAnswers } = this.props
        const numberOfCards = deck.questions.length
        return (
            <View style={{ flex: 1, justifyContent: 'center', }}>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <Text style={styles.title}>Congrats! you just finished {deck.title}</Text>
                    <View style={styles.resultsContainer}>
                        <Text style={styles.totalText}>Total questions : {numberOfCards}</Text>
                        <Text style={styles.correctText}>Correct answers : {correctAnswers}</Text>
                        <Text style={styles.incorrectText}>Inorrect answers : {incorrectAnswers}</Text>
                        <Text style={styles.percentage}>Percentage : {(correctAnswers / numberOfCards) * 100}%</Text>
                    </View>
                </View>

                <View style={styles.btnsContains}>
                    <CustomButton
                        text='Restart Quiz'
                        color='white'
                        onPress={() => this.props.navigation.replace(QUIZ_SCREEN, { deckId: deck.id })} />
                    <CustomButton
                        text='Back to Deck'
                        containerStyle={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'white' }}
                        onPress={() => { this.props.navigation.goBack() }} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnsContains: {
        flex: 1,
        alignItems: 'center',
    },
    resultsContainer: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 20
    },
    totalText: {
        fontSize: 18
    },
    correctText: {
        fontSize: 18,
        color: 'green'
    },
    incorrectText: {
        fontSize: 18,
        color: 'red'
    },
    percentage: {
        fontSize: 18
    }
})

function mapStateToProps({ decks }, { route }) {
    const { deckId, correctAnswers, incorrectAnswers } = route.params;
    const deck = decks[deckId]
    return {
        deck,
        correctAnswers,
        incorrectAnswers
    }
}

export default connect(mapStateToProps)(ScoreScreen)