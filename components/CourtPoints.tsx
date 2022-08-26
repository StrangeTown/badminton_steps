import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

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
  activePoint: {
    position: string
    directionDegree: number
  }
}

interface directionProps {
  degree: number
}
function Direction({ degree }: directionProps) {
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
              const isActive = position === activePoint.position
              let pointStyle = styles.point

              // support ipad
              if (Platform.OS === 'ios' && Platform.isPad) {
                pointStyle = {...pointStyle, ...styles.pointPad}
              }

              if (isActive) {
                pointStyle = {
                  ...pointStyle,
                  ...styles.pointActive
                }
              }

              return (
                <View
                  key={position}
                  style={
                    pointStyle
                  }
                >
                  {isActive && (
                    <Direction degree={activePoint.directionDegree} />
                  )}
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

const pointSize = 110
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
    width: pointSize,
    height: pointSize,
    borderRadius: 300,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  pointPad: {
    width: pointSize * 2,
    height: pointSize * 2,
  },
  pointActive: {
    backgroundColor: '#fff',
    borderColor: 'transparent',
  },
  direction: {
    position: 'absolute',
    top: -1,
    left: -1,
    width: '102%',
    height: '102%',
    overflow: 'hidden',
    borderRadius: 100,
  },
  pointer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '54%',
    height: '54%',
    backgroundColor: Colors.light.pointDirection,
  },
})
