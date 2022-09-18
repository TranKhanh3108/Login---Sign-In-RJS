import { StyleSheet, Text, Pressable } from 'react-native';

export default function Buttton({label}) {
  return (
    <Pressable
    style={styles.nutt}
    >
      <Text textDecorationColor="white">{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  nutt: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#FFE148',
  },
});