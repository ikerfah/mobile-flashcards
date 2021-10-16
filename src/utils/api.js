import {
    _getDecks,
    _saveDeck,
    _saveCard,
} from './_DATA.js'

export function getInitialData() {
    return Promise.all([
        _getDecks(),
    ]).then(([decks]) => ({
        decks,
    }))
}

export function saveDeck(title) {
    return _saveDeck(title)
}

export function saveCard(deckId,question,answer) {
    return _saveCard(deckId,question,answer)
}