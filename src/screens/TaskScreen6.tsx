import {View, StyleSheet} from 'react-native';

export const TaskScreen6 = () => {
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
  },
  purpleBox: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'purple',
  },
  orangeBox: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'orange'
  },
  cyanBox: {
    flex: 2,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'cyan',
  },
});
