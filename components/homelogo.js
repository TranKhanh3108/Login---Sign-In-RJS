import React from 'react';
import { StyleSheet,Image } from 'react-native';

export default function Logo() {
  return (
    <Image
        style={styles.log0}
        source={require('../img/iconp.png')}
      />
  );
}
const styles = StyleSheet.create({
    log0: {
        width: 150,
        height: 200,
      },
});