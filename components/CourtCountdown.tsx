import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  initialNum: number
  onFinish: () => void
}

export default function ({ initialNum, onFinish }: Props) {
  const [countdownNum, setCountdownNum] = useState(initialNum)

  const tick = () => {
    setCountdownNum((num) => {
      if (num === 0) {
        onFinish()
        return 0
      }
      return num - 1
    })
  }

  useEffect(() => {
    const intervalid = setInterval(() => {
      tick()
    }, 1000)
    return () => intervalid && clearTimeout(intervalid)
  }, [])

  return (
    <View style={styles.countdown}>
      <Text style={styles.countVal}>{countdownNum}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  countdown: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  },
  countVal: {
    fontSize: 300,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {
      width: 6,
      height: 6
    },
    textShadowRadius: 6
  }
})
