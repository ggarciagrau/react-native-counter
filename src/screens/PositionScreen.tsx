import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300

  },
  purpleBox: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0
  },
  orangeBox: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  redBox: {
    backgroundColor: 'red',
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0
    ...StyleSheet.absoluteFillObject
  }
});
