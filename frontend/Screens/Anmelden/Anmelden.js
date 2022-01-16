import axios from 'axios';
import React, { useState } from 'react';
import {View, TextInput, Button} from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import { Snackbar,  } from 'react-native-paper';
import { connect } from 'react-redux';
import LinkButton from '../../Components/LinkButton';
import { COLORS } from '../../Styles/Colors';
import globalStyle from '../../Styles/GlobalStyles';
import TextfeldAnmelden from './TextFeldAnmelden';

// Anmeldeseite mit Textfeldern E-mail Adresse, Passwort und Button zum anmelden
const Anmelden = ({...props}) => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [visible, setVisible] = useState(false);
  const [snackbarText, setSnackBarText] = useState('');

  const onDismissSnackBar = () => setVisible(false);

  const handleLoginProcess = async () => {
    const resultUser = await axios(`http://192.168.2.115:3000/api/v1/users/${emailText}`);

    if (resultUser.data.length == 0 || resultUser.data[0].password != passwordText) {
      setVisible(true);
      setSnackBarText('keine email Übereinstimmung ');
    } else {
      if (resultUser.data[0].password != passwordText || resultUser.data[0].email != emailText) {
        setVisible(true);
        setSnackBarText('bitte überprüfe deine Log In Daten')
      } else {
        props.setUserData(resultUser.data[0]);

        console.log(resultUser.data[0]);
        props.setLogin(true);
      }
    }
  }  
    
  return (
    <>
      <View style={globalStyle.container}>
        <TextInput
          placeholder='e-mail'
          onChangeText={setEmailText}
          value={emailText} />
        <TextInput
          placeholder='password'
          secureTextEntry={true}
          onChangeText={setPasswordText}
          value={passwordText} />
        <Button title='anmelden' onPress={() => handleLoginProcess()} />
        <LinkButton title={'Registrieren'} link={'SignUp'} type={'primary'} />
      </View>
      <View style={{ marginTop: 100 }}>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={2000}
          style={{ backgroundColor: COLORS.needHelpColor }}
        >{snackbarText}</Snackbar>
      </View>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (loginState) =>
      dispatch({ type: "SET_LOGIN", loginState: loginState }),
    setUserData: (userData) =>
      dispatch({ type: "SET_USERDATA", userData: userData })
  };
};

export default connect(null, mapDispatchToProps)(Anmelden);