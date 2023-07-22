import {SafeAreaView} from 'react-native';
import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
import {CounterScreen} from './src/screens/CounterScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';

export const App = () => {
  return (
    <SafeAreaView>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};

export default App;
