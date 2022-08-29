import { updateDynamicSpeed, updatePoints, updateRest, updateSets, updateShots, updateSoundEffect, updateSpeed } from "../screens/configSlice"
import persist from "../utils/persist"
import get from 'lodash.get'
import store from "../store"
import Config from "../constants/Config"

const initConfigFromStorage = async () => {
  const storedState = await persist.getStoredState()
  const sets = get(storedState, 'config.sets') || Config.sets
  const rest = get(storedState, 'config.rest') || Config.rest
  const shots = get(storedState, 'config.shots') || Config.shots
  const speed = get(storedState, 'config.speed') || Config.speed
  const points = get(storedState, 'config.points') || Config.points
  const soundEffect = get(storedState, 'config.soundEffect') || Config.soundEffect
  const dynamicSpeed = get(storedState, 'config.dynamicSpeed') || Config.dynamicSpeed

  store.dispatch(updateSets(sets))
  store.dispatch(updateRest(rest))
  store.dispatch(updateShots(shots))
  store.dispatch(updateSpeed(speed))
  store.dispatch(updatePoints(points))
  store.dispatch(updateSoundEffect(soundEffect))
  store.dispatch(updateDynamicSpeed(dynamicSpeed))
}

export default {
  initConfigFromStorage
}
