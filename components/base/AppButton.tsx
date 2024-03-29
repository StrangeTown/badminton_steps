import { Pressable, StyleSheet, Text } from 'react-native'

interface Props {
  onPress: () => void
  title: string
  type?: 'text' | 'default' | undefined
  color?: string
  style?: any
}
export default function AppButton({ onPress, title, type, color, style }: Props) {
  return (
    <Pressable
      style={[styles.container, type === 'text' && styles.containerTextType]}
      onPress={() => {
        onPress()
      }}
    >
      <Text
        style={[
          styles.text,
          type === 'text' && styles.textTextType,
          !!color && { color },
          style && style,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6b5a5a',
    padding: 16,
    paddingRight: 50,
    paddingLeft: 50,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  containerTextType: {
    backgroundColor: 'transparent',
    shadowRadius: 0,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textTextType: {
    color: '#6b5a5a',
    fontWeight: 'normal',
  },
})
