import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'

class DecksScreen extends Component {

    renderItem = ({ item }) => {
        const deckId = item
        return <Deck deckId={deckId} />
    }
    render() {
        const { decksIds } = this.props
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

function mapStateToProps({ decks }) {
    return {
        decksIds: Object.keys(decks)
    }
}

export default connect(mapStateToProps)(DecksScreen)