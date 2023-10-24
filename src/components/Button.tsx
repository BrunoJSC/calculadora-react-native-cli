import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },

  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },

  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },

  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

interface ButtonProps {
  onPress: (label: string) => void;
  label: string;

  double?: boolean;
  triple?: boolean;
  operation?: boolean;
}

export function Button({
  onPress,
  label,
  double,
  triple,
  operation,
}: ButtonProps) {
  if (double) {
    return (
      <TouchableHighlight onPress={() => onPress(label)}>
        <Text style={[styles.button, styles.buttonDouble]}>{label}</Text>
      </TouchableHighlight>
    );
  }

  if (triple) {
    return (
      <TouchableHighlight onPress={() => onPress(label)}>
        <Text style={[styles.button, styles.buttonTriple]}>{label}</Text>
      </TouchableHighlight>
    );
  }

  if (operation) {
    return (
      <TouchableHighlight onPress={() => onPress(label)}>
        <Text style={[styles.button, styles.operationButton]}>{label}</Text>
      </TouchableHighlight>
    );
  }

  return (
    <TouchableHighlight onPress={() => onPress(label)}>
      <Text style={styles.button}>{label}</Text>
    </TouchableHighlight>
  );
}
