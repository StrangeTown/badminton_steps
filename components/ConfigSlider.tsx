import Slider from "@react-native-community/slider"
import { useState } from "react"
import { StyleSheet } from "react-native"
import Colors from "../constants/Colors"
import { Text, View } from "./Themed"

interface Props {
  title: string,
  max: number,
  min: number
}

export default function ConfigSlider({ title, max, min }: Props) {
  const [value, setValue] =useState(0)

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}
          <Text style={styles.value}>{value}</Text>
        </Text>
        <Slider
          step={1}
          style={{ width: 200, height: 40 }}
          minimumValue={min}
          maximumValue={max}
          minimumTrackTintColor={Colors.light.court}
          maximumTrackTintColor="#ddd"
          onValueChange={(val) => setValue(val)}
          thumbImage={require('../assets/images/Group_2_3_2.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 34,
  },
  title: {
    // textAlign: 'center',
    fontSize: 16,
    color: Colors.dark.font,
  },
  value: {
    fontSize: 20,
    color: Colors.dark.font,
    fontWeight: 'bold'
  }
})