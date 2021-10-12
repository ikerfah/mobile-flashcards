let decks = {
  '1': { id: '1', title: 'deck1', numberOfCards: 5 },
  '2': { id: '2', title: 'deck2', numberOfCards: 0 },
  '3': { id: '3', title: 'deck3', numberOfCards: 1 },
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getDecks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...decks }), 1000)
  })
}