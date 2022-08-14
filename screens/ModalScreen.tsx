import { StyleSheet } from 'react-native';
import ConfigSlider from '../components/ConfigSlider';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <ConfigSlider title='组数：' min={1} max={7}/>
      <ConfigSlider title='每组间隔（秒）：' min={5} max={20}/>
      <ConfigSlider title='每组击打次数：' min={8} max={32}/>
      <ConfigSlider title='击打间隔（秒）：' min={2} max={10}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
