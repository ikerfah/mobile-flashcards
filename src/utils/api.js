import {
    _getDecks,
} from './_DATA.js'

export function getInitialData() {
    return Promise.all([
        _getDecks(),
    ]).then(([decks]) => ({
        decks,
    }))
}