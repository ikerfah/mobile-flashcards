import AsyncStorage from '@react-native-async-storage/async-storage';

export const DECKS_STORAGE_KEY = "Flashcards:decks"
let decks = {
  '1': {
    id: '1', title: 'deck1', questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  '2': { id: '2', title: 'deck2', questions: [] },
  '3': { id: '3', title: 'deck3', questions: [] },
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export async function _getDecks() {

  const decks = await getData()

  return new Promise((res, rej) => {
    res({ ...decks })
  })
}

export async function _saveDeck(title) {

  const formattedDeck = await saveDeckTitle(title)

  return new Promise(async (res, rej) => {
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

    console.log("decks =>> ", decks)

    res(card)
  })
}


const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    console.log("DATA=", jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    return []
  }
}

const saveDeckTitle = async (title) => {
  const formattedDeck = {
    id: generateUID(),
    title: title,
    questions: []
  }

  try {
    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [formattedDeck.id]: formattedDeck
    }))
  } catch (e) {
  }

  return formattedDeck
}