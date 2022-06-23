import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

//style
import styles from './style';

//image
import Images from '../../utils/images';

//colors
import { Colors } from '../../constants';

function CurtainLayer({ CurtainText, onPress }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const open = () => setIsOpen(previousState => !previousState);
  const stop = () => setIsStop(previousState => !previousState);
  const close = () => setIsClose(previousState => !previousState);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.layer}>
        <Image style={styles.symbol} source={Images.logo} />

        <View>
          <View>
            <Text style={styles.text}>{CurtainText}</Text>
          </View>

          <View style={styles.buttonrow}>
            <TouchableOpacity style={styles.button}>
              <View>
                <Text
                  style={{
                    color: isOpen ? Colors.bronze : Colors.white,
                  }}
                  onPress={open}>
                  Open
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View>
                <Text
                  style={{
                    color: isStop ? Colors.bronze : Colors.white,
                  }}
                  onPress={stop}>
                  Stop
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View>
                <Text
                  style={{
                    color: isClose ? Colors.bronze : Colors.white,
                  }}
                  onPress={close}>
                  Close
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default CurtainLayer;
