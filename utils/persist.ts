import AsyncStorage from "@react-native-async-storage/async-storage";
import store from '../store'

const saveConfig = async () => {
  const config = store.getState()
  const configStr = JSON.stringify(config)
  await AsyncStorage.setItem("@BadmintonStepsStore:config", configStr);
}

const getConfig = async () => {
  let storedConfig = await AsyncStorage.getItem("@BadmintonStepsStore:config");
  if (storedConfig) {
    return JSON.parse(storedConfig)
  } else {
    return undefined
  }
}

export default {
  saveConfig,
  getConfig
}
