import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class ItemQuestion extends React.Component {
    state = {
        isAnswerShown: false
    }

    toggleAnswerShown = () => {
        this.setState((prevState) => ({
            isAnswerShown: !prevState.isAnswerShown
        }))
    }
    render() {
        const { question, answer } = this.props
        const { isAnswerShown } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.questionText}>{isAnswerShown ? answer : question}</Text>
                <TouchableOpacity onPress={this.toggleAnswerShown}>
                    <Text style={styles.showAnswerBtn}>{isAnswerShown ? 'Question' : 'Answer'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionText: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: 8
    },
    showAnswerBtn: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#ff8300',
        padding: 8
    }
})


export default ItemQuestion