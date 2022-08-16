import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function CourtFinish() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Button
            title="完成"
            onPress={() => {
              navigation.goBack()
            }}
          ></Button>
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
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  main: {
    backgroundColor: '#fff',
    padding: 30,
    width: 320,
    height: 200,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 10
  },
})
