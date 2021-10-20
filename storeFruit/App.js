import React from 'react'
import { Text, SafeAreaView, StatusBar } from 'react-native'
import { CalculadoraScreen } from './src/screens/store';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>

      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />

      <StoreScreen />
    </SafeAreaView>
  )
}

export default App;