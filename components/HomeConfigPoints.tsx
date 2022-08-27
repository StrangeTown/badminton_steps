import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import Colors from "../constants/Colors"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { selectPoints, updatePoints } from "../screens/configSlice"

type RowProps = {
  rowidx: number
  actionDisabled: boolean
}
const Row = ({ rowidx, actionDisabled }: RowProps) => {
  const points = useAppSelector(selectPoints)
  const dispatch = useAppDispatch()

  const handlePointClick = (position: string) => {
    if (points.includes(position)) {
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

        if (position === '1-1') {
          return <View></View>
        }

        return (
          <View
            style={[styles.point, isActive && styles.pointActive]}
            key={idx}
            onTouchEnd={() => {
              if (actionDisabled) return
              handlePointClick(position)
            }}
          ></View>
        )
      })}
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
      {new Array(3).fill(1).map((val, idx) => {
        return <Row rowidx={idx} key={idx} actionDisabled={type === "home"} />
      })}
    </View>
  )
}

const containerWidth = 140
const containerHeight = containerWidth * 1.1
const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    height: containerHeight,
    marginBottom: 20,
    backgroundColor: Colors.light.court,
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
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
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  pointActive: {
    backgroundColor: "#fff",
  },
})
