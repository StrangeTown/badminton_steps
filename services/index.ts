import { updateRest, updateSets, updateShots, updateSpeed } from "../screens/configSlice"
import persist from "../utils/persist"
import get from 'lodash.get'
import store from "../store"

const initConfigFromStorage = async () => {
  const config = await persist.getConfig()
  const sets = get(config, 'config.sets') || 3
  const rest = get(config, 'config.rest') || 10
  const shots = get(config, 'config.shots') || 12
  const speed = get(config, 'config.speed') || 3

  store.dispatch(updateSets(sets))
  store.dispatch(updateRest(rest))
  store.dispatch(updateShots(shots))
  store.dispatch(updateSpeed(speed))
}

export default {
  initConfigFromStorage
}
