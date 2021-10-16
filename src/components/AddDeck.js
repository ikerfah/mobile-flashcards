import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { handleAddDeck } from '../actions/decks';
import CustomButton from './CustomButton';


class AddDeck extends Component {
    state = {
        title: ''
    }

    onChangeText = (title) => {

        
        this.setState(() => ({
            title
        }))
    }

    handleSubmit = () =>{
        const {dispatch} = this.props

        const {title} = this.state

        dispatch(handleAddDeck(title))

        this.setState(() => ({
            title:''
        }))
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.title}
                    onChangeText={this.onChangeText}
                    placeholder="Deck title"
                />
                <CustomButton
                    text='Submit'
                    disabled={this.state.title == ''}
                    containerStyle={{ backgroundColor: 'black' ,alignSelf:'center'}}
                    textStyle={{ color: 'white' }}
                    onPress={this.handleSubmit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        justifyContent:'space-around'
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
export default connect()(AddDeck);