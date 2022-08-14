import { Image, StyleSheet, Text, View } from 'react-native'

export const pointPoisitions = [
  '0-0',
  '0-1',
  '0-2',
  '1-0',
  '1-2',
  '2-0',
  '2-1',
  '2-2',
]

interface Props {
  activePoint: string
}

function Direction() {
  const randomnum = Math.round(Math.random() * 3)
  const degree = 90 * randomnum

  return (
    <View
      style={[
        styles.direction,
        {
          transform: [
            {
              rotateZ: `${degree}deg`,
            },
          ],
        },
      ]}
    >
      {/* <Image
        style={[styles.pointer]}
        source={require('../assets/images/direction_red.png')}
      /> */}
      <View style={styles.pointer}></View>
    </View>
  )
}

export default function CourtPoints({ activePoint }: Props) {
  return (
    <View style={styles.points}>
      {[1, 2, 3].map((val, rowidx) => {
        return (
          <View style={styles.row} key={val}>
            {[1, 2, 3].map((val, pointidx) => {
              const position = `${rowidx}-${pointidx}`
              if (position === '1-1') return <View key={'1-1'}></View>

              const isActive = position === activePoint

              return (
                <View
                  key={position}
                  style={
                    isActive
                      ? {
                          ...styles.point,
                          ...styles.pointActive,
                        }
                      : styles.point
                  }
                >
                  {isActive && <Direction />}
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  points: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    padding: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  point: {
    width: 110,
    height: 110,
    borderRadius: 300,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    position: 'relative',
  },
  pointActive: {
    backgroundColor: '#fff',
    borderColor: 'transparent',
  },
  direction: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 100
  },
  pointer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '54%',
    height: '54%',
    backgroundColor: 'red'
  },
})
