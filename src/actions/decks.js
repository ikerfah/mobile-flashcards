import { saveDeck, saveCard } from "../utils/api"

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

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

function addCard(deckId, card) {
    return {
        type: ADD_CARD,
        deckId,
        card
    }
}

export function handleAddDeck(title, onDeckSaved) {
    return (dispatch) => {
        saveDeck(title)
            .then((deck) => {
                dispatch(addDeck(deck))
                onDeckSaved(deck)
            })
    }
}

export function handleAddCard(deckId, question, answer) {
    return (dispatch) => {
        saveCard(deckId, question, answer)
            .then((card) => dispatch(addCard(deckId, card)))
    }
}