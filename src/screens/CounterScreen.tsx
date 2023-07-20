import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
        }}>
        Counter: {counter}
      </Text>
      <TouchableOpacity onPress={() => setCounter(prev => prev + 1)}>
        <Text style={{
            backgroundColor: "red",
            fontSize: 50,
            borderRadius: 15
        }}>+1</Text>
      </TouchableOpacity>
    </View>
  );
};
