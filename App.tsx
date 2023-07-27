import {SafeAreaView} from 'react-native';
import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
import {CounterScreen} from './src/screens/CounterScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {DimensionsScreen} from './src/screens/DimensionsScreen';
import {PositionScreen} from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';

export const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
