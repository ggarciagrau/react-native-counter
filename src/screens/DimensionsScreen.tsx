import {useEffect} from 'react';
import {View, useWindowDimensions, StyleSheet, Text} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.50}} />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'green',
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 25,
  },
});
