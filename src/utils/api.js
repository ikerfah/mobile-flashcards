import {
    _getDecks,
    _saveDeck,
    _saveCard,
    _deleteDeck,
} from './_DATA.js'

export function getInitialData() {
    return Promise.all([
        _getDecks(),
    ]).then(([decks]) => {
        console.log("DATA2=", decks);
        return {
            decks
        }
    })
}

export function saveDeck(title) {
    return _saveDeck(title)
}

export function saveCard(deckId, question, answer) {
    return _saveCard(deckId, question, answer)
}

export function deleteDeck(deckId) {
    return _deleteDeck(deckId)
}