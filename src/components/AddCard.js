import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { handleAddCard } from '../actions/decks';
import { createOkButtonAlert } from '../utils/alert';
import CustomButton from './CustomButton';


class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    onChangeText = (key, value) => {

        this.setState(() => ({
            [key]: value
        }))
    }

    handleSubmit = () => {
        const { dispatch, deckId } = this.props

        const { question, answer } = this.state

        dispatch(handleAddCard(deckId, question, answer, () => {
            this.setState(() => ({
                question: '',
                answer: ''
            }))

            createOkButtonAlert("Success", "You card has been added to the deck")
        }))


    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.question}
                    onChangeText={(text) => this.onChangeText('question', text)}
                    placeholder="What is your question?"
                />

                <TextInput
                    style={styles.input}
                    value={this.state.answer}
                    onChangeText={(text) => this.onChangeText('answer', text)}
                    placeholder="What is the answer?"
                />
                <CustomButton
                    text='Submit'
                    disabled={this.state.question == '' || this.state.answer == ''}
                    containerStyle={{ backgroundColor: 'black', alignSelf: 'center' }}
                    textStyle={{ color: 'white' }}
                    onPress={this.handleSubmit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    screenTitle: {
        fontSize: 40,
        alignSelf: 'center',
        textAlign: 'center'
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal: 5,
        borderRadius: 7
    },
})

function mapStateToProps({ }, { route }) {
    const { deckId } = route.params;
    return {
        deckId
    }
}

export default connect(mapStateToProps)(AddCard);