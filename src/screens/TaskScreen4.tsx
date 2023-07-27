import {View, StyleSheet} from 'react-native';

export const TaskScreen4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.cyanBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  purpleBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'purple'
  },
  orangeBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'orange',
    alignSelf: 'center'
  },
  cyanBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'cyan',
    alignSelf: 'flex-end'
  },
});
