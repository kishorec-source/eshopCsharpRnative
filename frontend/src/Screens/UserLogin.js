import React, {FC, ReactElement, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

export const UserLogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={username}
          placeholder={'Username'}
          onChangeText={text => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={Styles.form_input}
          value={password}
          placeholder={'Password'}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={() => {}}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Sign in'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.login_social}>
        <View style={Styles.login_social_separator}>
          <View style={Styles.login_social_separator_line} />
          <Text style={Styles.login_social_separator_text}>{'or'}</Text>
          <View style={Styles.login_social_separator_line} />
        </View>
        <View style={Styles.login_social_buttons}>
          <TouchableOpacity>
            <View
              style={[
                Styles.login_social_button,
                Styles.login_social_facebook,
              ]}>
              <Image
                style={Styles.login_social_icon}
                source={require('../assets/logo.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.login_social_button}>
              <Image
                style={Styles.login_social_icon}
                source={require('../assets/logo.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.login_social_button}>
              <Image
                style={Styles.login_social_icon}
                source={require('../assets/logo.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  login_wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  form_input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20, // Updated border radius
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 20, // Updated border radius
    alignItems: 'center',
    marginTop: 20, // Added margin to create gap
  },
  button_label: {
    color: '#fff',
    fontSize: 16,
  },
  login_social: {
    width: '100%',
    alignItems: 'center',
  },
  login_social_separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  login_social_separator_line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  login_social_separator_text: {
    marginHorizontal: 10,
    color: '#888',
  },
  login_social_buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  login_social_button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  login_social_facebook: {
    backgroundColor: '#3b5998',
  },
  login_social_icon: {
    width: 20,
    height: 20,
  },
});

export default UserLogIn;
