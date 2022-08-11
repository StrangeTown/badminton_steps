import { Button, StyleSheet, Text, View } from 'react-native'

interface Props {
  onStartClick: () => void
}

export default function CourtTip({ onStartClick }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Text>Some tips.</Text>
        </View>
        <View>
          <Button
            title="开始吧"
            onPress={() => {
              onStartClick()
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
    height: 500,
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
    shadowRadius: 10
  },
})
