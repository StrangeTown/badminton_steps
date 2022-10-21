import { StyleSheet, Switch, View, Text, Pressable } from 'react-native'
import i18n from '../services/i18n/index'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { selectDynamicSpeed, selectSoundEffect, updateDynamicSpeed, updateSoundEffect } from '../screens/configSlice'
import Colors from '../constants/Colors'
import persist from '../utils/persist'

const Divider = () => {
  return <View style={styles.divider} />
}

type OptionItemProps = {
  title: string
  value: boolean
  onValueChange: (value: boolean) => void
}
const OptionItem = ({ title, value, onValueChange }: OptionItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Switch
        trackColor={{ false: '#767577', true: Colors.light.court }}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  )
}

export default function CourtOptions() {
  const navigation = useNavigation()
  const soundEffect = useAppSelector(selectSoundEffect)
  const dynamicSpeed = useAppSelector(selectDynamicSpeed)
  const dispatch = useAppDispatch()

  return (
    <View style={styles.container}>

      {/* Sound Effect */}
      <OptionItem 
        title={i18n.t('kSouncEffect')}
        value={soundEffect}
        onValueChange={(value) => {
          dispatch(updateSoundEffect(value))
          persist.saveState()
        }}
      />

      {/* Dynamic Speed */}
      <OptionItem 
        title={i18n.t('kDynamicSpeed')}
        value={dynamicSpeed}
        onValueChange={(value) => {
          dispatch(updateDynamicSpeed(value))
          persist.saveState()
        }}
      />
      <Divider />
      <View style={styles.goBackWrap}>
        <Pressable
          style={styles.goBackButton}
          onTouchEnd={() => {
            navigation.goBack()
          }}
        >
          <Text style={styles.goBackButtonText}>{i18n.t('kBack')}</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    height: 220,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#fff',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  goBackWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  goBackButton: {
    width: '100%',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowRadius: 14,
  },
  goBackButtonText: {
    fontSize: 20,
    color: Colors.light.font,
  },
})
