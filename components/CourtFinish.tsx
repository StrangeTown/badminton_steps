import { useNavigation } from '@react-navigation/native'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import i18n from '../services/i18n'
import AppButton from './base/AppButton'

export default function CourtFinish() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          style={styles.img}
          source={require('../assets/images/salman-hossain-saif-n3HjfZPuT5w-unsplash.jpeg')}
        />
        <View style={styles.buttonWrap}>
          <AppButton
            title={i18n.t('kFinish')}
            onPress={() => {
              navigation.goBack()
            }}
          />
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
    width: 320,
    height: 320,
    paddingBottom: 30,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
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
  img: {
    width: 320,
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  buttonWrap: {
    // marginTop: 30,
  },
})
