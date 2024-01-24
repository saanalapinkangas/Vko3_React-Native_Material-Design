// Androidin Material Designin käyttö
// npm install react-native-paper
// npm install react-native-safe-area-context
// npm install react-native-vector-icons

import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Login from './screens/Login';

export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
