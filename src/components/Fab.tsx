import {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

type Props = {
  onPressFn: () => void;
  children: ReactNode;
  orientation: 'left' | 'right';
};

export const Fab = ({onPressFn, children, orientation}: Props) => {
  const orientationStyle = (() => {
    if (orientation == 'left') {
      return styles.left;
    } else if (orientation == 'right') {
      return styles.right;
    }
  })();

  return (
    <TouchableOpacity style={[styles.location, orientationStyle]} onPress={() => onPressFn()}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  location: {
    position: 'absolute',
    bottom: 25,
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});