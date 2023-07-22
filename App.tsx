import {SafeAreaView} from 'react-native';
import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
import {CounterScreen} from './src/screens/CounterScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';

export const App = () => {
  return (
    <SafeAreaView
    style={{
      flex: 1
    }}>
      <DimensionsScreen />
    </SafeAreaView>
  );
};

export default App;
