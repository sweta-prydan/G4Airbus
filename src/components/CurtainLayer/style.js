import { StyleSheet } from 'react-native';

//color
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  layer: {
    padding: 10,
    opacity: 0.9,
    borderRadius: 10,
    marginVertical: 3,
    marginHorizontal: 3,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: Colors.charlestonGreen,
  },

  symbol: {
    width: 90,
    height: 90,
  },

  text: {
    fontSize: 16,
    marginVertical: 20,
    color: Colors.white,
    marginHorizontal: 20,
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.bold,
  },

  buttonrow: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },

  button: {
    width: 80,
    elevation: 3,
    borderWidth: 3,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderColor: Colors.darkJungleGreen,
    backgroundColor: Colors.charlestonGreen,
  },
});

export default styles;
