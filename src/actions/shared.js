import { getInitialData } from '../utils/api'
import { receiveDecks } from '../actions/decks'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ decks }) => {
                console.log(decks)
                dispatch(receiveDecks(decks))
            })
    }
}