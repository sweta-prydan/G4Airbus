import React from 'react';
import { Text, View } from 'react-native';

//style
import styles from './style';

const CentralControl = ({ zoneName }) => {
  return (
    <View>
      <View style={styles.toggle}>
        <Text style={styles.description}>Select Zone</Text>
      </View>

      <View style={styles.childView}>{zoneName}</View>
    </View>
  );
};
export default CentralControl;
