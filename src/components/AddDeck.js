import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
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
                    containerStyle={{ backgroundColor: 'black' ,alignSelf:'center'}}
                    textStyle={{ color: 'white' }}
                    onPress={() => { console.log("Submit") }} />
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
export default AddDeck;