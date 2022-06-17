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
    width: 400,
    marginLeft: 6,
    borderRadius: 20,
    backgroundColor: Colors.transform,
  },

  SectionStyle: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  input: {
    width: 350,
    marginTop: 30,
    marginLeft: 35,
    marginRight: 35,
    fontSize: 16,
  },

  inputStyle: {
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    color: Colors.black,
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
