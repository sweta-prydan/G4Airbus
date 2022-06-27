import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  childView: {
    width: 350,
    marginVertical: 6,
    borderRadius: 20,
    marginHorizontal: 6,
    backgroundColor: Colors.transform,
  },

  SectionStyle: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  input: {
    width: 300,
    marginTop: 30,
    marginVertical: 30,
    marginHorizontal: 30,
  },

  inputStyle: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    color: Colors.black,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    fontFamily: Fonts.FontFamily.medium,
    fontWeight: Fonts.FontWeight.medium,
  },

  errorTextStyle: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
  },

  buttonStyle: {
    height: 40,
    marginTop: 20,
    marginBottom: 25,
    marginVertical: 35,
    marginHorizontal: 35,
  },

  registerTextStyle: {
    padding: 10,
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },
});
export default styles;
