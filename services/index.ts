import { updatePoints, updateRest, updateSets, updateShots, updateSpeed } from "../screens/configSlice"
import persist from "../utils/persist"
import get from 'lodash.get'
import store from "../store"
import Config from "../constants/Config"

const initConfigFromStorage = async () => {
  const config = await persist.getConfig()
  const sets = get(config, 'config.sets') || Config.sets
  const rest = get(config, 'config.rest') || Config.rest
  const shots = get(config, 'config.shots') || Config.shots
  const speed = get(config, 'config.speed') || Config.speed
  const points = get(config, 'config.points') || Config.points

  store.dispatch(updateSets(sets))
  store.dispatch(updateRest(rest))
  store.dispatch(updateShots(shots))
  store.dispatch(updateSpeed(speed))
  store.dispatch(updatePoints(points))
}

export default {
  initConfigFromStorage
}
