import { useEffect, useState } from "react"
import { Platform, StyleSheet, Text, View } from "react-native"
import Colors from "../constants/Colors"

interface Props {
  initialNum: number
  onFinish: () => void
  phase: string
}

let countdownInterval: number | undefined = undefined

export default function ({ initialNum, onFinish, phase }: Props) {
  const [countdownNum, setCountdownNum] = useState(initialNum)

  const tick = () => {
    setCountdownNum((num) => {
      return Math.max(num - 1, 1)
    })
  }

  useEffect(() => {
    if (countdownNum === 1) {
      clearInterval(countdownInterval)
      setTimeout(() => {
        onFinish()
      }, 1000)
    }
  }, [countdownNum])

  useEffect(() => {
    countdownInterval = window.setInterval(() => {
      tick()
    }, 1200)

    return () => {
      if (countdownInterval) clearTimeout(countdownInterval)
    }
  }, [])

  let countValStyle = styles.countVal
  // support ipad
  if (Platform.OS === 'ios' && Platform.isPad) {
    countValStyle = {...countValStyle, ...styles.countValPad}
  }

  return (
    <View style={styles.countdown}>
      <View style={styles.phaseWapper}>
        <Text style={styles.phase}>{phase}</Text>
      </View>
      <Text style={countValStyle}>{countdownNum}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  countdown: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  countVal: {
    fontSize: 300,
    color: "#555",
  },
  countValPad: {
    fontSize: 500,
  },
  phase: {
    fontSize: 24,
    color: Colors.light.font
  },
  phaseWapper: {
    backgroundColor: '#fff',
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  }
})
