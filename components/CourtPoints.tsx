import { StyleSheet, Text, View } from 'react-native'

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

export default function CourtPoints({ activePoint }: Props) {
  return (
    <View style={styles.points}>
      {[1, 2, 3].map((val, rowidx) => {
        return (
          <View style={styles.row} key={val}>
            {[1, 2, 3].map((val, pointidx) => {
              const position = `${rowidx}-${pointidx}`
              const isActive = position === activePoint
              const pointStyle = isActive
                ? {
                    ...styles.point,
                    ...styles.pointActive,
                  }
                : styles.point
              return (
                <View
                  key={position}
                  style={position === '1-1' ? {} : pointStyle}
                ></View>
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
    width: 100,
    height: 100,
    borderRadius: 300,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
  },
  pointActive: {
    backgroundColor: '#fff',
    borderColor: 'transparent',
  },
})
