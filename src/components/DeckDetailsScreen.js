import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import CustomButton from './CustomButton'
import Deck from './Deck'

class DeckDetailsScreen extends Component {

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
                        onPress={() => { console.log("ADD CARD") }} />
                    <CustomButton
                        text='Start Quiz'
                        containerStyle={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'white' }}
                        onPress={() => { console.log("Start QUIZ") }} />
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