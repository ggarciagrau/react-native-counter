import {SafeAreaView} from 'react-native';
import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
import {CounterScreen} from './src/screens/CounterScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {DimensionsScreen} from './src/screens/DimensionsScreen';
import {PositionScreen} from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TaskScreen9 } from './src/screens/TaskScreen9';

export const App = () => {
  return (
    <SafeAreaView
      style={{
        // Notch color
        backgroundColor: 'blue',
        flex: 1,
      }}>
      <TaskScreen9 />
    </SafeAreaView>
  );
};

export default App;
