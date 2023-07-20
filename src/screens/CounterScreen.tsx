import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text
        style={styles.counterLabel}>
        Counter: {counter}
      </Text>
      <TouchableOpacity onPress={() => setCounter(prev => prev + 1)}>
        <Text style={styles.button}>+1</Text>
      </TouchableOpacity>
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
    fontSize: 50
  },
  button: {
    backgroundColor: 'red',
    fontSize: 50,
    borderRadius: 15,
  },
});
