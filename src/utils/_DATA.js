let decks = {
  '1': { id: '1', title: 'deck1', questions: [] },
  '2': { id: '2', title: 'deck2', questions: [] },
  '3': { id: '3', title: 'deck3', questions: [] },
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getDecks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...decks }), 1000)
  })
}

export function _saveDeck(title) {
  return new Promise((res, rej) => {
    const formattedDeck = {
      id: generateUID(),
      title: title,
      questions: []
    }

    decks = {
      ...decks,
      [formattedDeck.id]: formattedDeck
    }

    res(formattedDeck)
  })
}

export function _saveCard(deckId, question, answer) {
  return new Promise((res, rej) => {

    const card = {
      question,
      answer
    }

    decks = {
      ...decks,
      [deckId]: {
        ...decks[deckId],
        questions: [
          ...decks[deckId].questions,
          {
            ...card
          }
        ]
      }
    }

    console.log("decks =>> ",decks)

    res(card)
  })
}