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
      return styles.fabWrapperL;
    } else if (orientation == 'right') {
      return styles.fabWrapperR;
    }
  })();

  return (
    <TouchableOpacity style={orientationStyle} onPress={() => onPressFn()}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fabWrapperL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fabWrapperR: {
    position: 'absolute',
    bottom: 25,
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
