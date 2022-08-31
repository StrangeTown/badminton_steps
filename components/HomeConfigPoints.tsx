import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import Colors from "../constants/Colors"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { selectPoints, updatePoints } from "../screens/configSlice"

type RowProps = {
  rowidx: number
  clickable: boolean
}
const Row = ({ rowidx, clickable }: RowProps) => {
  const points = useAppSelector(selectPoints)
  const dispatch = useAppDispatch()

  const handlePointClick = (position: string) => {
    if (points.includes(position)) {
      if (points.length === 1) return
      dispatch(updatePoints(points.filter((p) => p !== position)))
    } else {
      dispatch(updatePoints([...points, position]))
    }
  }

  return (
    <View style={styles.row}>
      {new Array(3).fill(1).map((val, idx) => {
        const position = `${rowidx}-${idx}`
        const isActive = points.includes(position)

        if (position === "1-1") {
          return <View key={idx}></View>
        }

        return (
          <View
            style={[
              styles.point,
              isActive && styles.pointActive,
              clickable && styles.pointClickable,
            ]}
            key={idx}
            onTouchEnd={() => {
              if (!clickable) return
              handlePointClick(position)
            }}
          ></View>
        )
      })}
    </View>
  )
}

const Lines = () => {
  return (
    <View style={styles.linesContainer}>
      <View style={styles.shortServiceLine}></View>
      <View style={styles.court}>
        <View style={styles.centerLine}></View>
      </View>
    </View>
  )
}
interface ContainerProps {
  type: "home" | "modal"
}

export default function HomeConfigPoints({ type }: ContainerProps) {
  const navigation = useNavigation()

  return (
    <View
      style={[styles.container, type === "modal" && styles.containerModal]}
      onTouchEnd={() => {
        navigation.navigate("Modal")
      }}
    >
      <Lines />
      {new Array(3).fill(1).map((val, idx) => {
        return <Row rowidx={idx} key={idx} clickable={type === "modal"} />
      })}
    </View>
  )
}

const containerWidth = 140
const containerHeight = containerWidth * 1.1
const pointSize = 20
const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    height: containerHeight,
    marginBottom: 20,
    backgroundColor: Colors.light.court,
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },
  containerModal: {
    width: containerWidth * 1.3,
    height: containerHeight * 1.3,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  point: {
    width: pointSize,
    height: pointSize,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  pointActive: {
    backgroundColor: "#fff",
  },
  pointClickable: {
    width: pointSize * 1.4,
    height: pointSize * 1.4,
  },
  linesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  shortServiceLine: {
    marginTop: "30%",
    height: 2,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  court: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  centerLine: {
    width: 2,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
})
