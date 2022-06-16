import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//style
import styles from './style';

//image
import Images from '../../utils/images';

const SwitchLayer = ({ onPress, switchText }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.layer}>
        <Image style={styles.symbol} source={Images.logo} />
        <View>
          <Text style={styles.text}>{switchText}</Text>

          <TouchableOpacity onPress={() => setIsEnabled(!isEnabled)}>
            <View>
              <Image
                style={styles.icon}
                source={isEnabled ? Images.toggleOff : Images.toggleOn}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SwitchLayer;
