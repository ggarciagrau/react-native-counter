import {View, Text} from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
        }}>
        Hello world
      </Text>
    </View>
  );
};
