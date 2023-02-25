import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'

import HomeConfig from '../components/HomeConfig'
import persist from '../utils/persist'
import { RootTabScreenProps } from '../types'
import Colors from '../constants/Colors'
import AppButton from '../components/base/AppButton'
import i18n from '../services/i18n'
import HomeList from '../components/HomeList'

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const gotoPlay = () => {
    navigation.navigate({
      name: 'Practice',
      params: {},
    })
  }

  return (
    <View style={styles.container}>
      {/* Config */}
      <HomeConfig />

      {/* Start Button */}
      <View style={styles.startWrap}>
        <AppButton
          onPress={() => {
            gotoPlay()
          }}
          title={i18n.t('kGotoPlay')}
        />
      </View>

      {/* Shortcut List */}
      <HomeList />
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
    marginTop: 40,
  },
})
