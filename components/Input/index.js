<<<<<<< HEAD
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import VisibilityoffIcon from "../../assets/Icons/visibility_off.svg";
import VisibilityIcon from '../../assets/Icons/visibility_show.svg';
import { BorderlessButton } from 'react-native-gesture-handler';

const Input = ({
  field: { value, name },
  form: { handleChange, handleBlur, touched, errors },
  innerRef, secureTextEntry,
  ...rest }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View>
      <TextInput style={{ margin: 8 }}
        ref={innerRef}
        style={styles.input}
=======
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import VisibilityOffIcon from '../../assets/Icons/visibility_off.svg';
import VisibilityIcon from '../../assets/Icons/visibility.svg';
import {useTheme} from '@react-navigation/native';
import {BorderlessButton} from 'react-native-gesture-handler';

const Input = ({
  field: {value, name},
  form: {handleChange, handleBlur, touched, errors},
  innerRef,
  secureTextEntry,
  ...rest
}) => {
  const {colors} = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={{margin: 8}}>
      <TextInput
        ref={innerRef}
        style={[styles.input, {color: colors.text}]}
>>>>>>> aceac507ff0a1817282f5b67984daa575e946082
        name={name}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
<<<<<<< HEAD
        // secureTextEntry={!!secureTextEntry || !isPasswordVisible}
        // secureTextEntry={!!secureTextEntry}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        {...rest} />

      {touched[name] && errors[name] && (
        <Typography variant="errorText">{errors[name]}</Typography>
      )}

      {secureTextEntry && <BorderlessButton style={{
        position: 'absolute',
        right: 11,
        top: 11,
        zIndex: 5,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',

      }} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
        {
          isPasswordVisible ? (<VisibilityIcon height={24} width={24} fill="#0D3846"></VisibilityIcon>)
            : (<VisibilityoffIcon height={24} width={24} fill="#0D3846"></VisibilityoffIcon>)
        }
      </BorderlessButton>
      }

=======
        secureTextEntry={!!secureTextEntry && !isPasswordVisible}
        {...rest}
      />
      {touched[name] && errors[name] && (
        <Typography variant="error">{errors[name]}</Typography>
      )}
      {secureTextEntry && (
        <BorderlessButton
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 10,
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? (
            <VisibilityIcon height={24} width={24} fill="red" />
          ) : (
            <VisibilityOffIcon height={24} width={24} fill="red" />
          )}
        </BorderlessButton>
      )}
>>>>>>> aceac507ff0a1817282f5b67984daa575e946082
    </View>
  );
};

export default Input;
