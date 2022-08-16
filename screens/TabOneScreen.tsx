import Slider from "@react-native-community/slider"
import { Button, StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import HomeConfig from "../components/HomeConfig"
import { Text, View } from "../components/Themed"
import { useAppSelector } from "../hooks/reduxHooks"
import { RootTabScreenProps } from "../types"
import { selectSets } from "./configSlice"

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {

  return (
    <View style={styles.container}>
      <HomeConfig/>

      <View style={styles.startWrap}>
        <Button
          title="进入步法练习"
          onPress={() => {
            navigation.navigate("Practice")
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  startWrap: {
    marginTop: 140,
  },
})
