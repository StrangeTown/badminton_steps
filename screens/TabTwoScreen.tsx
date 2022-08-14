import { useEffect, useState } from 'react'
import { Button, SafeAreaView, StyleSheet } from 'react-native'
import CourtCountdown from '../components/CourtCountdown'
import CourtPoints, { pointPoisitions } from '../components/CourtPoints'
import CourtTip from '../components/CourtTip'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const sets = 3
  const rest = 10
  const shots = 6
  const speed = 2000

  const [activePointPosition, setActivePointPosition] = useState('')
  const [tipVisible, setTipVisible] = useState(true)
  const [countdownVisible, setCountdownVisible] = useState(false)
  const [currentSet, setCurrentSet] = useState(1)
  const [currentShot, setCurrentShot] = useState(shots)

  let positionInterval: any = null
  
  const setRandomPosition = () => {
    const position =
    pointPoisitions[Math.round(Math.random() * (pointPoisitions.length - 1))]
    setActivePointPosition(position)
  }
  const tick = () => {
    setCurrentShot(shot => {
      console.log('shot', shot)
      if (shot > 0) {
        setRandomPosition()
        return shot - 1
      } else {
        clearInterval(positionInterval)
        return shot
      }
    })
  }

  const start = () => {
    positionInterval = setInterval(tick, speed)
  }
  useEffect(() => {
    return () => positionInterval && clearInterval(positionInterval)
  }, [])

  const handleStartClick = () => {
    setTipVisible(false)
    setCountdownVisible(true)
  }

  const phaseString = `第${currentSet}组`

  return (
    <SafeAreaView style={styles.container}>
      {tipVisible && (
        <CourtTip
          onStartClick={() => {
            handleStartClick()
          }}
        />
      )}
      <View style={styles.main}>
        {countdownVisible && (
          <CourtCountdown
            initialNum={5}
            onFinish={() => {
              setCountdownVisible(false)
              start()
            }}
            phase={phaseString}
          />
        )}

        <View style={styles.back}>
          <Button
            title="back"
            onPress={() => {
              navigation.navigate('Root')
            }}
          ></Button>
          <Text>{currentShot}</Text>
        </View>
        <View style={styles.shortServiceLine}></View>
        <View style={styles.court}>
          <View style={styles.centerLine}></View>
        </View>
        <CourtPoints activePoint={activePointPosition} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    backgroundColor: '#36BF8E',
  },
  main: {
    height: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  back: {
    position: 'absolute',
    zIndex: 110,
    backgroundColor: 'transparent',
  },
  shortServiceLine: {
    marginTop: '30%',
    height: 10,
    backgroundColor: '#fff',
  },
  court: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  centerLine: {
    height: '100%',
    width: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
