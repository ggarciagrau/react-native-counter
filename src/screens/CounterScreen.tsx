import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterLabel}>Counter: {counter}</Text>
      <Fab orientation="left" onPressFn={() => setCounter(prev => prev + 1)}>+1</Fab>
      <Fab orientation="right" onPressFn={() => setCounter(prev => prev - 1)}>-1</Fab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterLabel: {
    fontSize: 50,
  },
});
