import { updateRest, updateSets, updateShots, updateSpeed } from "../screens/configSlice"
import persist from "../utils/persist"
import get from 'lodash.get'
import store from "../store"

const initConfigFromStorage = async () => {
  const config = await persist.getConfig()
  const sets = get(config, 'config.sets')
  const rest = get(config, 'config.rest')
  const shots = get(config, 'config.shots')
  const speed = get(config, 'config.speed')

  store.dispatch(updateSets(sets))
  store.dispatch(updateRest(rest))
  store.dispatch(updateShots(shots))
  store.dispatch(updateSpeed(speed))
}

export default {
  initConfigFromStorage
}
