import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Button, Pressable, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { removeShortcut, selectShortcuts } from "../screens/configSlice"
import i18n from "../services/i18n"
import persist from "../utils/persist"

export default function HomeList() {
  const shortcuts = useSelector(selectShortcuts)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  if (!shortcuts.length) {
    return null
  }

  const HandleDeleteClick = (id: string) => {
    dispatch(removeShortcut(id))
  }
  const HandlePlayClick = (id: string) => {
    console.log("play", id)
    navigation.navigate("Practice", { shortcutid: id })
  }

  return (
    <View style={styles.container}>
      {/* or */}
      <View style={styles.separator}>
        <Text style={styles.orText}>{i18n.t("kShortcuts")}</Text>
        <View style={styles.separatorLine} />
      </View>

      {/* list */}
      <View style={styles.main}>
        {shortcuts.map((item, index) => {
          const name = item.name
          return (
            <View key={index} style={styles.item}>
              <Pressable
                style={styles.delete}
                onPress={() => HandleDeleteClick(item.id)}
              >
                <Feather name="x" size={12} color="#6b5a5a" />
              </Pressable>
              <View style={styles.itemText}>
                <Text
                  style={styles.itemTextVal}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {name}
                </Text>
              </View>
              <Pressable
                style={styles.delete}
                onPress={() => HandlePlayClick(item.id)}
              >
                <Feather name="play" size={12} color="#6b5a5a" />
              </Pressable>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemTextVal: {
    color: "#6b5a5a",
    fontSize: 13,
  },

  itemText: {
    marginHorizontal: 8,
    backgroundColor: "#f1f1f1",
    padding: 5,
    width: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  delete: {
    width: 20,
    height: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    display: "flex",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    // padding: 5,
    marginVertical: 8,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#f5f5f5",
    marginTop: 50,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    // backgroundColor: "red",
    width: "30%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  orText: {
    fontSize: 12,
    fontWeight: "300",
    color: "#999",
    backgroundColor: "#fff",
    position: "relative",
    zIndex: 10,
    paddingHorizontal: 6,
  },
  separatorLine: {
    height: 2,
    width: "100%",
    backgroundColor: "#f1f1f1",
    position: "absolute",
    top: 6,
    left: 0,
  },
})
