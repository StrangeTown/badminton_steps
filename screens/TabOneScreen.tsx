import Slider from "@react-native-community/slider"
import { Button, StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import HomeConfig from "../components/HomeConfig"
import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../types"

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <HomeConfig sets={3} rest={10} shots={12} speed={3}/>

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
