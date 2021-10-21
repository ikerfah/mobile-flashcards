import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import { handleInitialData } from '../actions/shared';
import { SCREEN_DECK_DETAILS_SCREEN } from '../utils/constants';
class DecksScreen extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    renderItem = ({ item }) => {
        const deckId = item
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(SCREEN_DECK_DETAILS_SCREEN, { deckId })}>
                <Deck deckId={deckId} />
            </TouchableOpacity>
        )
    }
    render() {
        const { decksIds } = this.props

        if (decksIds == null || decksIds.length === 0) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>You have 0 decks</Text>
                </View>)
        }
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={decksIds}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

function mapStateToProps({ decks }, props) {
    console.log("LOOOOG => ", props)
    return {
        decksIds: Object.keys(decks)
    }
}

export default connect(mapStateToProps)(DecksScreen)