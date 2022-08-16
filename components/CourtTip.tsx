import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'

interface Props {
  onStartClick: () => void
}

export default function CourtTip({ onStartClick }: Props) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.legend}>
          <View style={styles.point}>
            <View style={styles.direction}></View>
          </View>
          <View style={styles.tip}>
            <View style={styles.white}></View>
            <Text>
              白色区域表示<Text style={styles.tipVal}>击球位置</Text>
            </Text>
          </View>
          <View style={styles.tip}>
            <View style={styles.red}></View>
            <Text>
              红色区域表示<Text style={styles.tipVal}>击打方向</Text>
            </Text>
          </View>
        </View>
        <View>
          <Button
            title="开始吧"
            onPress={() => {
              onStartClick()
            }}
          ></Button>
          <Button
            title="返回"
            onPress={() => {
              navigation.goBack()
            }}
          ></Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  main: {
    backgroundColor: '#fff',
    padding: 30,
    width: 320,
    height: 500,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  legend: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  point: {
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  direction: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 100,
    height: 100,
    left: '50%',
    top: '50%',
  },
  tip: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tipVal: {
    fontWeight: 'bold',
  },
  white: {
    width: 30,
    height: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  red: {
    width: 30,
    height: 20,
    backgroundColor: 'red',
    // borderWidth: 1,
    borderColor: '#aaa',
    marginRight: 10,
  },
})
