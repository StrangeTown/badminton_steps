import { Pressable, StyleSheet, View } from 'react-native'

import HomeConfig from '../components/HomeConfig'
import persist from '../utils/persist'
import { RootTabScreenProps } from '../types'
import Colors from '../constants/Colors'
import AppButton from '../components/base/AppButton'
import i18n from '../services/i18n'

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const gotoPlay = () => {
    persist.saveConfig()
    navigation.navigate('Practice')
  }

  return (
    <View style={styles.container}>
      <HomeConfig />

      <View style={styles.startWrap}>
        <AppButton
          onPress={() => {
            gotoPlay()
          }}
          title={i18n.t('kGotoPlay')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
  startWrap: {
    marginTop: 140,
  },
})
