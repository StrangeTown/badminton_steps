import { useEffect, useState } from "react"
import { Platform, StyleSheet, Text, View } from "react-native"
import Colors from "../constants/Colors"

interface Props {
  initialNum: number
  onFinish: () => void
  phase: string
}

export default function ({ initialNum, onFinish, phase }: Props) {
  const [countdownNum, setCountdownNum] = useState(initialNum)

  useEffect(() => {
    if (countdownNum === 0) {
      onFinish()
      return
    }
    const timeout = setTimeout(() => {
      setCountdownNum((n) => n - 1)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [countdownNum])

  // Support iPad
  const isIpad = Platform.OS === "ios" && Platform.isPad
  let countValStyle = isIpad ? {
    ...styles.countVal,
    ...styles.countValPad,
  } : styles.countVal

  // Make sure the number is not 0
  const displayNum = Math.max(countdownNum, 1)

  return (
    <View style={styles.countdown}>
      <View style={styles.phaseWapper}>
        <Text style={styles.phase}>{phase}</Text>
      </View>
      <Text style={countValStyle}>{displayNum}</Text>
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
    color: Colors.light.font,
  },
  phaseWapper: {
    backgroundColor: "#fff",
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
})
