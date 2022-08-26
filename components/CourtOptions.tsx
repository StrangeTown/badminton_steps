import { StyleSheet } from 'react-native'
import AppButton from './base/AppButton'
import { View } from './Themed'
import i18n from '../services/i18n/index'
import { useNavigation } from '@react-navigation/native'

export default function CourtOptions() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <AppButton
        title={i18n.t('kBack')}
        onPress={() => {
          navigation.goBack()
        }}
        type='text'
        color='#fff'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowRadius: 14,
  },
})
