import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'

class DeckDetailsScreen extends Component {

    render() {
        const { deckId } = this.props
        return (
            <View style={{ flex: 1 }}>
                <Deck deckId={deckId} />
            </View>
        )
    }
}

function mapStateToProps({ }, { route }) {
    const { deckId } = route.params;
    return {
        deckId
    }
}

export default connect(mapStateToProps)(DeckDetailsScreen)