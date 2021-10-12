import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import Deck from './Deck'

const _decks = [
    { key: '1', title: 'deck1', numberOfCards: 5 },
    { key: '2', title: 'deck2', numberOfCards: 0 },
    { key: '3', title: 'deck3', numberOfCards: 1 },
]
class DecksScreen extends Component {

    renderItem = ({ item }) => {
        return <Deck {...item} />
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={_decks}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

export default DecksScreen