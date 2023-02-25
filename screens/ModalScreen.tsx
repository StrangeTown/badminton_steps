import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import AppButton from "../components/base/AppButton"
import ConfigSlider from "../components/ConfigSlider"

import EditScreenInfo from "../components/EditScreenInfo"
import HomeConfigPoints from "../components/HomeConfigPoints"
import Colors from "../constants/Colors"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import i18n from "../services/i18n"
import { appDimensions } from "../utils"
import persist from "../utils/persist"
import {
  addShortcut,
  selectPoints,
  selectRest,
  selectSets,
  selectShortcuts,
  selectShots,
  selectSpeed,
  updateRest,
  updateSets,
  updateShots,
  updateSpeed,
} from "./configSlice"

interface DialogProps {
  title: string
  text: string
  onSave: (value: string) => void
  onCancel: () => void
  placeholder: string
}
function Dialog(props: DialogProps) {
  const [value, setValue] = useState("")

  return (
    <View style={styles.dialog}>
      <View style={styles.dialogContent}>
        <Text style={styles.dialogTitle}>{props.title}</Text>
        <Text style={styles.dialogText}>{props.text}</Text>
        <TextInput
          style={styles.dialogInput}
          placeholder={props.placeholder}
          onChange={(e) => {
            setValue(e.nativeEvent.text)
          }}
        />
        <View style={styles.dialogButtons}>
          <AppButton
            title={i18n.t("kSave")}
            onPress={() => {
              if (value) {
                props.onSave(value)
              }
            }}
            type="text"
          />
          <AppButton
            title={i18n.t("kCancel")}
            onPress={() => {
              props.onCancel()
            }}
            type="text"
          />
        </View>
      </View>
    </View>
  )
}

export default function ModalScreen() {
  const sets = useAppSelector(selectSets)
  const rest = useAppSelector(selectRest)
  const shots = useAppSelector(selectShots)
  const speed = useAppSelector(selectSpeed)
  const dispatch = useAppDispatch()
  const isSmall = appDimensions.isSmallDevice()
  const [dialogVisible, setDialogVisible] = useState(false)
  const points = useAppSelector(selectPoints)
  const navigation = useNavigation()
  const shortcuts = useAppSelector(selectShortcuts)

  const handleShorcutSave = (value: string) => {
    setDialogVisible(false)
    dispatch(
      addShortcut({
        name: value,
        id: new Date().getTime().toString(),
        sets,
        rest,
        shots,
        speed,
        points,
      })
    )
    navigation.goBack()
  }
  const handleSaveAsShortcut = () => {
    const shortcutsLength = shortcuts.length
    // max 3
    if (shortcutsLength >= 3) {
      return
    }
    setDialogVisible(true)
  }
  return (
    <View style={styles.container}>
      <HomeConfigPoints type="modal" />

      <View style={[styles.sliders, isSmall && styles.slidersSmall]}>
        <ConfigSlider
          title={i18n.t("kSetsTitle")}
          min={1}
          max={7}
          value={sets}
          onChange={(val) => {
            dispatch(updateSets(val))
          }}
        />
        <ConfigSlider
          title={i18n.t("kShotsTitle")}
          min={4}
          max={40}
          value={shots}
          onChange={(val) => {
            dispatch(updateShots(val))
          }}
        />
        <ConfigSlider
          title={i18n.t("kRestTitle")}
          min={5}
          max={30}
          value={rest}
          onChange={(val) => {
            dispatch(updateRest(val))
          }}
        />
        <ConfigSlider
          title={i18n.t("kSpeedTitle")}
          min={2}
          max={6}
          value={speed}
          onChange={(val) => {
            dispatch(updateSpeed(val))
          }}
        />
      </View>

      <View style={styles.actions}>
        <Pressable
          style={styles.confirmButton}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Text style={styles.confirmText}>
            {i18n.t("kConfirm")}
          </Text>
        </Pressable>
        <Pressable
          style={styles.addButton}
          onPress={() => {
            handleSaveAsShortcut()
          }}
        >
          <Text style={styles.addText}>
            {i18n.t("kSaveAsShortcut")}
          </Text>
        </Pressable>
      </View>

      {dialogVisible && (
        <Dialog
          title={i18n.t("kSaveAsShortcutTitle")}
          text={i18n.t("kSaveConfigToShortcut")}
          onSave={(value) => {
            handleShorcutSave(value)
          }}
          onCancel={() => {
            setDialogVisible(false)
          }}
          placeholder={i18n.t("kInputShortcutName")}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: '#6b5a5a',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 14,
  },
  dialogButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  dialogInput: {
    marginTop: 10,
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  dialog: {
    padding: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  dialogContent: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  dialogText: {
    marginTop: 10,
    fontSize: 12,
    color: "#9b8a8a",
    width: "100%",
  },
  actions: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    display: "flex",
  },
  addButton: {
    marginTop: 6,
    padding: 10,
    borderRadius: 5,
    // backgroundColor: "#ddd",
  },
  addText: {
    color: "#9b8a8a",
    fontSize: 10,
    textDecorationLine: "underline",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  sliders: {
    marginTop: 10,
  },
  slidersSmall: {
    marginTop: 0,
  },
})
