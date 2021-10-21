import {
    RECEIVE_DECKS,
    ADD_DECK,
    ADD_CARD,
    DELETE_DECK
} from '../actions/decks'

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck.id]: { ...action.deck }
            }
        case DELETE_DECK:
            delete state[action.deckId]
            return {
                ...state,
            }
        case ADD_CARD:
            const { deckId, card } = action
            return {
                ...state,
                [deckId]: {
                    ...state[deckId],
                    questions: [
                        ...state[deckId].questions,
                        {
                            ...card
                        },

                    ]
                }
            }
        default:
            return state
    }
}