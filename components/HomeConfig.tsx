import { Feather, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import { useAppSelector } from '../hooks/reduxHooks'
import {
  selectSets,
  selectShots,
} from '../screens/configSlice'
import i18n from '../services/i18n'

export default function HomeConfig() {
  const sets = useAppSelector(selectSets)
  const shots = useAppSelector(selectShots)

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View></View>
      <View
        style={styles.config}
        onTouchEnd={() => {
          navigation.navigate('Modal')
        }}
      >
        <Text style={styles.configVal}>
          {i18n.t('kSets', {
            val: sets,
          })}
        </Text>
        <Text style={styles.configValXMark}>
          <Feather name="x" color={'#aaa'}/>
        </Text>
        <Text style={styles.configVal}>
          {i18n.t('kShots', {
            val: shots,
          })}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  config: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  configVal: {
    fontSize: 30,
    color: Colors.light.font,
  },
  configValXMark: {
    marginLeft: 10,
    marginRight: 10,
  },
})
