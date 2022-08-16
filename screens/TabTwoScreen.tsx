import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, StyleSheet } from 'react-native'
import CourtCountdown from '../components/CourtCountdown'
import CourtFinish from '../components/CourtFinish'
import CourtPoints, { pointPoisitions } from '../components/CourtPoints'
import CourtTip from '../components/CourtTip'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'

const sets = 3
const rest = 10
const shots = 6
const speed = 2000

let positionInterval: any = null

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [activePoint, setActivePoint] = useState({
    position: '',
    directionDegree: 0,
  })
  const [tipVisible, setTipVisible] = useState(true)
  const [countdownNum, setCountdownNum] = useState(0)
  const [currentShot, setCurrentShot] = useState(shots)
  const [leftSets, setLeftSets] = useState(sets)
  const [layerVisible, setLayerVisible] = useState(false)
  const [finishedModalVisible, setFinishedModalVisible] = useState(false)

  const startPlay = () => {
    setCurrentShot(shots)
    const setRandomPosition = () => {
      const position =
        pointPoisitions[
          Math.round(Math.random() * (pointPoisitions.length - 1))
        ]

      const randomnum = Math.round(Math.random() * 3)
      const degree = 90 * randomnum

      setActivePoint({
        position,
        directionDegree: degree,
      })
    }

    positionInterval = setInterval(() => {
      setRandomPosition()
      setCurrentShot((shot) => Math.max(shot - 1, 0))
    }, speed)
  }

  const startRest = () => {
    setCountdownNum(rest)
  }

  useEffect(() => {
    if (currentShot === 0) {
      clearInterval(positionInterval)
      const sets = Math.max(leftSets - 1, 0)
      setLeftSets(sets)
      if (sets === 0) {
        setFinishedModalVisible(true)
      } else {
        startRest()
      }
    }
  }, [currentShot])

  useEffect(() => {
    return () => positionInterval && clearInterval(positionInterval)
  }, [])

  const handleStartClick = () => {
    setTipVisible(false)
    setCountdownNum(5)
  }

  const phaseString = `第${sets - leftSets + 1}组`

  return (
    <SafeAreaView style={styles.container}>
      {layerVisible && (
        <View style={styles.layer}>
          <Button
            color={'#000'}
            title="hide"
            onPress={() => setLayerVisible(false)}
          ></Button>
        </View>
      )}
      {
        finishedModalVisible && <CourtFinish />
      }
      {tipVisible && (
        <CourtTip
          onStartClick={() => {
            handleStartClick()
          }}
        />
      )}
      <View style={styles.main}>
        {countdownNum > 0 && (
          <CourtCountdown
            initialNum={countdownNum}
            onFinish={() => {
              setCountdownNum(0)
              startPlay()
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
          <Button title="layer" onPress={() => setLayerVisible(true)}></Button>
          <Text>left sets: {leftSets}</Text>
          <Text>current shot: {currentShot}</Text>
        </View>
        <View style={styles.shortServiceLine}></View>
        <View style={styles.court}>
          <View style={styles.centerLine}></View>
        </View>
        <CourtPoints activePoint={activePoint} />
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
  layer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#222',
    zIndex: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
