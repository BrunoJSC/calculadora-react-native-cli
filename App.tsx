/* eslint-disable no-eval */
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Button} from './src/components/Button';
import {Display} from './src/components/Display';

function App(): JSX.Element {
  const [displayValue, setDisplayValue] = useState('0');

  function addDigit(n: string) {
    if (displayValue === '0') {
      setDisplayValue(n);
    } else {
      setDisplayValue(displayValue + n);
    }
  }

  function clear() {
    setDisplayValue('0');
  }

  function setOperation(operation: string) {
    setDisplayValue(displayValue + operation);
  }

  function equal() {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (e) {
      setDisplayValue('Error');
    }
  }

  function dot() {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    } else {
      setDisplayValue(displayValue + '.');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Display value={displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" onPress={clear} triple />
        <Button label="/" onPress={() => setOperation('/')} operation />
        <Button label="7" onPress={() => addDigit('7')} />
        <Button label="8" onPress={() => addDigit('8')} />
        <Button label="9" onPress={() => addDigit('9')} />
        <Button label="*" onPress={() => setOperation('*')} operation />
        <Button label="4" onPress={() => addDigit('4')} />
        <Button label="5" onPress={() => addDigit('5')} />
        <Button label="6" onPress={() => addDigit('6')} />
        <Button label="-" onPress={() => setOperation('-')} operation />
        <Button label="1" onPress={() => addDigit('1')} />
        <Button label="2" onPress={() => addDigit('2')} />
        <Button label="3" onPress={() => addDigit('3')} />
        <Button label="+" onPress={() => setOperation('+')} operation />
        <Button label="0" onPress={() => addDigit('0')} />
        <Button label="." onPress={dot} />
        <Button label="=" onPress={equal} double />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
