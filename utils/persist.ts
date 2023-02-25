import AsyncStorage from "@react-native-async-storage/async-storage";
import store, { RootState } from '../store'

const storageKeyState = "@BadmintonStepsStore:state"

const saveState = async (state: RootState) => {
  const stateStr = JSON.stringify(state)
  await AsyncStorage.setItem(storageKeyState, stateStr);
}

const getStoredState = async () => {
  let storedState = await AsyncStorage.getItem(storageKeyState);
  if (storedState) {
    return JSON.parse(storedState)
  } else {
    return undefined
  }
}

export default {
  saveState,
  getStoredState
}
