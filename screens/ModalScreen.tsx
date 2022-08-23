import { StyleSheet } from 'react-native'
import ConfigSlider from '../components/ConfigSlider'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import Colors from '../constants/Colors'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import i18n from '../services/i18n'
import {
  selectRest,
  selectSets,
  selectShots,
  selectSpeed,
  updateRest,
  updateSets,
  updateShots,
  updateSpeed,
} from './configSlice'

export default function ModalScreen() {
  const sets = useAppSelector(selectSets)
  const rest = useAppSelector(selectRest)
  const shots = useAppSelector(selectShots)
  const speed = useAppSelector(selectSpeed)
  const dispatch = useAppDispatch()

  return (
    <View style={styles.container}>
      <ConfigSlider
        title={i18n.t('sets_title')}
        min={1}
        max={7}
        value={sets}
        onChange={(val) => {
          dispatch(updateSets(val))
        }}
      />
      <ConfigSlider
        title={i18n.t('rest_title')}
        min={5}
        max={30}
        value={rest}
        onChange={(val) => {
          dispatch(updateRest(val))
        }}
      />
      <ConfigSlider
        title={i18n.t('shots_title')}
        min={4}
        max={40}
        value={shots}
        onChange={(val) => {
          dispatch(updateShots(val))
        }}
      />
      <ConfigSlider
        title={i18n.t('speed_title')}
        min={2}
        max={6}
        value={speed}
        onChange={(val) => {
          dispatch(updateSpeed(val))
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
