import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//style
import styles from './style';

//image
import Images from '../../utils/images';

const Toggle = ({ text }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View>
      <Text style={styles.text}> {text}</Text>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => setIsEnabled(!isEnabled)}>
        <View>
          <Image
            style={styles.icon}
            source={isEnabled ? Images.toggleOff : Images.toggleOn}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Toggle;
