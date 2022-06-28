import React from 'react';
import { Text, KeyboardAvoidingView, View, TextInput } from 'react-native';

//style
import styles from './style';

const Input = ({ text, value, onChange }) => {
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <View style={styles.main}>
        <Text style={styles.text}> {text} </Text>
        <TextInput
          value={value}
          style={styles.input}
          onChange={onChange}
          keyboardType="name-phone-pad"
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Input;
