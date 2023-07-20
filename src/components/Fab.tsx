import {ReactNode} from 'react';
import {StyleSheet, TouchableNativeFeedback, View, Text} from 'react-native';

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
    <View style={[styles.location, orientationStyle]}>
      <TouchableNativeFeedback
        onPress={() => onPressFn()}
        background={TouchableNativeFeedback.Ripple('red', false, 30)}>
        <View style={[styles.fab, styles.shadow]}>
          <Text style={styles.fabText}>{children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 2,
  },
});
