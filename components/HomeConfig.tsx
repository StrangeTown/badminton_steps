import { useNavigation } from "@react-navigation/native"
import { StyleSheet } from "react-native"
import Colors from "../constants/Colors"
import { useAppSelector } from "../hooks/reduxHooks"
import { selectRest, selectSets, selectShots, selectSpeed } from "../screens/configSlice"
import { Text, View } from "./Themed"

export default function HomeConfig() {
  const sets = useAppSelector(selectSets)
  const rest = useAppSelector(selectRest)
  const shots = useAppSelector(selectShots)
  const speed = useAppSelector(selectSpeed)

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.configItem}>
        <Text style={styles.configItemText}>练习</Text>
        <View style={styles.configValueWrap}>
          <Text
            style={styles.configValue}
            onPress={() => navigation.navigate("Modal")}
          >
            {sets}组
          </Text>
        </View>
      </View>

      <View style={styles.configItem}>
        <Text style={styles.configItemText}>每组间隔</Text>
        <View style={styles.configValueWrap}>
          <Text
            style={styles.configValue}
            onPress={() => navigation.navigate("Modal")}
          >
            {rest}秒
          </Text>
        </View>
      </View>

      <View style={styles.configItem}>
        <Text style={styles.configItemText}>每组</Text>
        <View style={styles.configValueWrap}>
          <Text
            style={styles.configValue}
            onPress={() => navigation.navigate("Modal")}
          >
            {shots}次
          </Text>
        </View>
        <Text style={styles.configItemText}>击打</Text>
      </View>

      <View style={styles.configItem}>
        <Text style={styles.configItemText}>每次击打间隔</Text>
        <View style={styles.configValueWrap}>
          <Text
            style={styles.configValue}
            onPress={() => navigation.navigate("Modal")}
          >
            {speed}秒
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  configItem: {
    marginBottom: 24,
    textAlign: "center",
    display: "flex",
    alignItems: "baseline",
    flexDirection: "row",
  },
  configItemText: {
    color: Colors.light.font,
    fontSize: 20,
  },
  configValue: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#fff",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
  },
  configValueWrap: {
    borderRadius: 5,
    backgroundColor: Colors.light.court,
    marginLeft: 2,
    marginRight: 2
  },
})
