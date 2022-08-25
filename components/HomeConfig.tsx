import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import { useAppSelector } from '../hooks/reduxHooks'
import {
  selectRest,
  selectSets,
  selectShots,
  selectSpeed,
} from '../screens/configSlice'
import i18n from '../services/i18n'

export default function HomeConfig() {
  const sets = useAppSelector(selectSets)
  const rest = useAppSelector(selectRest)
  const shots = useAppSelector(selectShots)
  const speed = useAppSelector(selectSpeed)

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.configItem}>
        <Text style={styles.configItemText}>{i18n.t('practice')}</Text>
        <View style={styles.configValueWrap}>
          <Text
            style={styles.configValue}
            onPress={() => navigation.navigate('Modal')}
          >
            {sets}
            {i18n.t('sets')}
          </Text>
        </View>
      </View>

      <View style={styles.configItem}>
        <Text style={styles.configItemText}>
          {i18n.t('restTimeBetweenSets')}
        </Text>
        <View style={styles.configValueWrap}>
          <Text
            style={styles.configValue}
            onPress={() => navigation.navigate('Modal')}
          >
            {rest}
            {i18n.t('seconds')}
          </Text>
        </View>
      </View>

      <View style={styles.configItem}>
        <Text style={styles.configItemText}>{i18n.t('eachSet')}</Text>
        <View style={styles.configValueWrap}>
          <Text
            style={styles.configValue}
            onPress={() => navigation.navigate('Modal')}
          >
            {shots}
            {i18n.t('times')}
          </Text>
        </View>
        <Text style={styles.configItemText}>{i18n.t('shots')}</Text>
      </View>

      <View style={styles.configItem}>
        <Text style={styles.configItemText}>{i18n.t('timeBetweenShots')}</Text>
        <View style={styles.configValueWrap}>
          <Text
            style={styles.configValue}
            onPress={() => navigation.navigate('Modal')}
          >
            {speed}
            {i18n.t('seconds')}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  configItem: {
    marginBottom: 24,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  configItemText: {
    color: Colors.light.font,
    fontSize: 20,
  },
  configValue: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
  },
  configValueWrap: {
    borderRadius: 5,
    backgroundColor: Colors.light.court,
    marginLeft: 4,
    marginRight: 4,
  },
})
