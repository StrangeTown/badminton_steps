import Slider from "@react-native-community/slider"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Colors from "../constants/Colors"
import { appDimensions } from "../utils"

interface Props {
  title: string
  max: number
  min: number
  value: number
  onChange?: (val: number) => void
}

export default function ConfigSlider({
  title,
  max,
  min,
  value,
  onChange,
}: Props) {
  const isSmall = appDimensions.isSmallDevice()

  return (
    <View style={[styles.container, isSmall && styles.containerSmall]}>
      <View>
        <Text style={[styles.title, isSmall && styles.titleSmall]}>
          {title}
          <Text style={[styles.value, isSmall && styles.valueSmall]}>
            {value}
          </Text>
        </Text>
        <Slider
          value={value}
          step={1}
          style={{ width: 200, height: isSmall ? 30 : 40 }}
          minimumValue={min}
          maximumValue={max}
          minimumTrackTintColor={Colors.light.court}
          maximumTrackTintColor="#ddd"
          onValueChange={onChange}
          thumbImage={require("../assets/images/Group_2_3_2.png")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  containerSmall: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    color: Colors.dark.font,
  },
  titleSmall: {
    fontSize: 14,
  },
  value: {
    fontSize: 20,
    color: Colors.dark.font,
    fontWeight: "bold",
  },
  valueSmall: {
    fontSize: 16,
  },
})
