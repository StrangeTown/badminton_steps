import React, { useEffect, useState } from "react"
import { Button, SafeAreaView, StyleSheet } from "react-native"
import { useKeepAwake } from "expo-keep-awake"
import { Audio } from "expo-av"

import CourtCountdown from "../components/CourtCountdown"
import CourtFinish from "../components/CourtFinish"
import CourtOptions from "../components/CourtOptions"
import CourtPoints, { pointPoisitions } from "../components/CourtPoints"
import CourtTip from "../components/CourtTip"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"
import Colors from "../constants/Colors"
import { useAppSelector } from "../hooks/reduxHooks"
import i18n from "../services/i18n"
import { RootTabScreenProps } from "../types"
import {
  selectPoints,
  selectRest,
  selectSets,
  selectShots,
  selectSoundEffect,
  selectSpeed,
} from "./configSlice"
import store from "../store"

let positionInterval: any = null

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  useKeepAwake()
  const sets = useAppSelector(selectSets)
  const rest = useAppSelector(selectRest)
  const shots = useAppSelector(selectShots)
  const speed = useAppSelector(selectSpeed)
  const pointPositions = useAppSelector(selectPoints)
  // const soundEffect = useAppSelector(selectSoundEffect)

  const [activePoint, setActivePoint] = useState({
    position: "",
    directionDegree: 0,
  })
  const [tipVisible, setTipVisible] = useState(true)
  const [countdownNum, setCountdownNum] = useState(0)
  const [currentShot, setCurrentShot] = useState(shots)
  const [leftSets, setLeftSets] = useState(sets)
  const [layerVisible, setLayerVisible] = useState(false)
  const [finishedModalVisible, setFinishedModalVisible] = useState(false)
  const [optionsVisible, setOptionsVisible] = useState(false)
  const [sound, setSound] = useState<any>()

  async function playSound() {
    const soundEffect = store.getState().config.soundEffect
    if (!soundEffect) {
      return
    }

    // console.log("Loading Sound")
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/2.mp3")
    )
    setSound(sound)

    // console.log("Playing Sound")
    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          // console.log("Unloading Sound")
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  const startPlay = () => {
    setCurrentShot(shots)
    const setRandomPosition = () => {
      playSound()
      const position =
        pointPositions[Math.round(Math.random() * (pointPositions.length - 1))]

      const randomnum = Math.round(Math.random() * 3)
      const degree = 90 * randomnum

      setActivePoint({
        position,
        directionDegree: degree,
      })
    }
    const tick = () => {
      setRandomPosition()
      setCurrentShot((shot) => Math.max(shot - 1, 0))
    }

    positionInterval = setInterval(() => {
      tick()
    }, speed * 1000)
  }

  const clearPosition = () => {
    setActivePoint({
      position: "",
      directionDegree: 0,
    })
  }
  const startRest = () => {
    clearPosition()
    setCountdownNum(rest)
  }

  useEffect(() => {
    if (currentShot === 0) {
      clearInterval(positionInterval)
      setTimeout(() => {
        const sets = Math.max(leftSets - 1, 0)
        setLeftSets(sets)
        if (sets === 0) {
          clearPosition()
          setFinishedModalVisible(true)
        } else {
          startRest()
        }
      }, 3000)
    }
  }, [currentShot])

  useEffect(() => {
    return () => positionInterval && clearInterval(positionInterval)
  }, [])

  const handleStartClick = () => {
    setTipVisible(false)
    setCountdownNum(5)
  }

  const phaseString = i18n.t("kCurrentSets", { number: sets - leftSets + 1 })
  const hadnleMainTouch = () => {
    setOptionsVisible((visible) => !visible)
  }

  return (
    <SafeAreaView style={styles.container}>
      {layerVisible && (
        <View style={styles.layer}>
          <Button
            color={"#000"}
            title="hide"
            onPress={() => setLayerVisible(false)}
          ></Button>
        </View>
      )}
      {finishedModalVisible && <CourtFinish />}
      {tipVisible && (
        <CourtTip
          onStartClick={() => {
            handleStartClick()
          }}
        />
      )}
      {optionsVisible && <CourtOptions />}
      <View style={styles.main} onTouchEnd={hadnleMainTouch}>
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

        <View style={styles.debug}>
          <Button
            title="back"
            onPress={() => {
              navigation.navigate("Root")
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
    backgroundColor: Colors.light.court,
  },
  main: {
    height: "100%",
    position: "relative",
    backgroundColor: "transparent",
  },
  debug: {
    position: "absolute",
    zIndex: 110,
    backgroundColor: "transparent",
    display: "none",
  },
  shortServiceLine: {
    marginTop: "30%",
    height: 10,
    backgroundColor: "#fff",
  },
  court: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  centerLine: {
    height: "100%",
    width: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  layer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#222",
    zIndex: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})
