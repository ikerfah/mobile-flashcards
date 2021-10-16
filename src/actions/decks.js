import { saveDeck } from "../utils/api"

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function handleAddDeck(title) {
    return (dispatch) => {
        saveDeck(title)
        .then((deck) => dispatch(addDeck(deck)))
    }
}