import { Pressable, StyleSheet } from 'react-native'

import HomeConfig from '../components/HomeConfig'
import { Text, View } from '../components/Themed'
import persist from '../utils/persist'
import { RootTabScreenProps } from '../types'
import Colors from '../constants/Colors'
import AppButton from '../components/base/AppButton'

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
          title={'进入步法训练'}
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
