import {View, StyleSheet} from 'react-native';

export const TaskScreen5 = () => {
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  purpleBox: {
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'purple'
  },
  orangeBox: {
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'orange'
  },
  cyanBox: {
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'cyan',
  },
});
