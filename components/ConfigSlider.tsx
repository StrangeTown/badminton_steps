import Slider from "@react-native-community/slider"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Colors from "../constants/Colors"

interface Props {
  title: string,
  max: number,
  min: number,
  value: number,
  onChange?: (val: number) => void
}

export default function ConfigSlider({ title, max, min, value, onChange }: Props) {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}
          <Text style={styles.value}>{value}</Text>
        </Text>
        <Slider
          value={value}
          step={1}
          style={{ width: 200, height: 40 }}
          minimumValue={min}
          maximumValue={max}
          minimumTrackTintColor={Colors.light.court}
          maximumTrackTintColor="#ddd"
          onValueChange={onChange}
          thumbImage={require('../assets/images/Group_2_3_2.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    color: Colors.dark.font,
  },
  value: {
    fontSize: 20,
    color: Colors.dark.font,
    fontWeight: 'bold'
  }
})
