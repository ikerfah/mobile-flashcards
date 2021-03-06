import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { SCORE_SCREEN } from '../utils/constants';
import CustomButton from './CustomButton';
import ItemQuestion from './ItemQuestion';
class QuizScreen extends Component {
    state = {
        currentCardIndex: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        gameOver: false
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            title: 'Quiz'
        });
    }

    handleUserResponse = (key) => {
        const { gameOver } = this.state
        if (gameOver) return
        const { id, questions } = this.props.deck

        const cardsNumber = questions.length

        const { currentCardIndex } = this.state

        if ((currentCardIndex + 1) === cardsNumber) {
            this.setState((prevState) => ({
                gameOver: true,
                [key]: prevState[key] + 1
            }), () => {
                this.props.navigation.replace(SCORE_SCREEN, {
                    deckId: id,
                    correctAnswers: this.state.correctAnswers,
                    incorrectAnswers: this.state.incorrectAnswers
                })
            })
        } else {
            this.setState((prevState) => ({
                currentCardIndex: prevState.currentCardIndex + 1,
                [key]: prevState[key] + 1
            }))
        }


    }

    render() {
        const { deck } = this.props
        const { currentCardIndex } = this.state

        const { questions } = deck

        const cardsNumber = questions.length

        const currentCard = questions[currentCardIndex]


        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.textCounter}>{this.state.currentCardIndex + 1}/{cardsNumber}</Text>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ItemQuestion {...currentCard} />
                    <CustomButton
                        text='Correct'
                        containerStyle={{ backgroundColor: 'green', borderColor: 'green' }}
                        textStyle={{ color: 'white' }}
                        onPress={() => this.handleUserResponse('correctAnswers')} />
                    <CustomButton
                        text='Incorrect'
                        containerStyle={{ backgroundColor: 'red', borderColor: 'red' }}
                        textStyle={{ color: 'white' }}
                        onPress={() => this.handleUserResponse('incorrectAnswers')} />
                </View>
            </View>
        )
    }
}

function mapStateToProps({ decks }, { route }) {
    const { deckId } = route.params;
    return {
        deck: decks[deckId]
    }
}

const styles = StyleSheet.create({
    textCounter: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5
    }
})
export default connect(mapStateToProps)(QuizScreen)