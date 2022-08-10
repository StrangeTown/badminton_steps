import { useEffect, useState } from 'react'
import { Button, SafeAreaView, StyleSheet } from 'react-native'
import CourtPoints, { pointPoisitions } from '../components/CourtPoints'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [activePointPosition, setActivePointPosition] = useState('0-2')
  const setRandomPosition = () => {
    const position = pointPoisitions[Math.round(Math.random() * (pointPoisitions.length - 1))]
    setActivePointPosition(position)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPosition()
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.back}>
          <Button
            title="back"
            onPress={() => {
              navigation.navigate('Root')
            }}
          ></Button>
        </View>
        <View style={styles.shortServiceLine}></View>
        <View style={styles.court}>
          <View style={styles.centerLine}></View>
        </View>
        <CourtPoints activePoint={activePointPosition}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    height: '100%',
    backgroundColor: '#36BF8E',
    position: 'relative',
  },
  back: {
    zIndex: 10,
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
