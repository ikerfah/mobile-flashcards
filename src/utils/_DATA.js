import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
export const DECKS_STORAGE_KEY = "Flashcards:decks"
export const NOTIFICATION_KEY = 'Flashcards:notifications'

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

export async function _saveCard(deckId, question, answer) {
  const card = {
    question,
    answer
  }
  await addCardToDeck(deckId, card)

  return new Promise((res, rej) => {
    res(card)
  })
}

export async function _deleteDeck(deckId) {

  return new Promise(async (res, rej) => {
    await deleteDeck(deckId)
    res(deckId)
  })
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
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

const addCardToDeck = async (deckId, card) => {
  const decks = await getData()

  await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deckId]: {
      ...decks[deckId],
      questions: [
        ...decks[deckId].questions,
        {
          ...card
        }
      ]
    }
  }))
}

const deleteDeck = async (deckId) => {
  const decks = await getData()

  delete decks[deckId]

  await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    ...decks
  }))
}

export function _clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export async function _setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(async (data) => {
      if (data === null) {
        const { status } = await Notifications.requestPermissionsAsync()
        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync()

          const schedule = new Date(Date.now() + 24 * 60 * 60 * 1000);
          schedule.setMinutes(20);
          schedule.setSeconds(0);

          await Notifications.scheduleNotificationAsync({
            content: {
              title: "Are you ready to study?",
              body: 'It been a while since your last visit, take a minute to read one of your decks',
            },
            trigger: {
              schedule,
              repeats: true,
            }
          });

          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))

        }
      }
    })
}