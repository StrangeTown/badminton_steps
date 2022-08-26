import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import i18n from '../services/i18n'
import AppButton from './base/AppButton'

interface Props {
  onStartClick: () => void
}

export default function CourtTip({ onStartClick }: Props) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.legend}>
          <View style={styles.point}>
            <View style={styles.directionWrap}>
              <View style={styles.direction}></View>
            </View>
          </View>
          <View style={styles.tip}>
            <View style={styles.white}></View>
            <Text style={styles.tipVal}>
              {i18n.t('kWhiteArea')}<Text style={styles.tipValBold}>{i18n.t('kPosition')}</Text>
            </Text>
          </View>
          <View style={styles.tip}>
            <View style={styles.red}></View>
            <Text style={styles.tipVal}>
              {i18n.t('kRedArea')}<Text style={styles.tipValBold}>{i18n.t('kDirection')}</Text>
            </Text>
          </View>
        </View>
        <View>
          <AppButton
            title={i18n.t('kLetGo')}
            onPress={() => {
              onStartClick()
            }}
          />
          <View style={styles.backWrap}>
            <AppButton
              title={i18n.t('kBack')}
              onPress={() => {
                navigation.goBack()
              }}
              type="text"
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  main: {
    backgroundColor: '#fff',
    padding: 30,
    paddingTop: 60,
    width: 320,
    height: 520,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  legend: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  point: {
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: '#fff',
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 10
  },
  directionWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    borderRadius: 200,
  },
  direction: {
    position: 'absolute',
    backgroundColor: '#cb464a',
    width: 60,
    height: 60,
    left: '50%',
    top: '50%',
  },
  tip: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tipVal: {
    color: Colors.light.font,
  },
  tipValBold: {
    fontWeight: 'bold',
  },
  white: {
    width: 30,
    height: 20,
    backgroundColor: '#fff',
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 4
  },
  red: {
    width: 30,
    height: 20,
    backgroundColor: '#cb464a',
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 4
  },
  backWrap: {
    marginTop: 5
  }
})
