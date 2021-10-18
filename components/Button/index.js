import React from 'react';
<<<<<<< HEAD
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Typography from '../Typography';
import styles from './styles';

const Button = ({ style, textStyle, title, ...rest }) => {
  return (
    <RectButton style={[styles.btn, style]} {...rest}>
      <View accessible accessibilityRole="button" accessibilityLabel="Login">
        <Typography variant="btnText" style={[styles.btnText, textStyle]}>
          {title}
=======
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';
import Typography from '../Typography';
import styles from './styles';

const Button = ({style, textStyle, title, ...rest}) => {
  const {colors} = useTheme();
  return (
    <RectButton
      style={[styles.btn, {backgroundColor: colors.primary}, style]}
      {...rest}>
      <View accessible accessibilityRole="button" accessibilityLabel="Login">
        <Typography variant="btnText" style={[styles.btnText, textStyle]}>
          {title.toUpperCase()}
>>>>>>> aceac507ff0a1817282f5b67984daa575e946082
        </Typography>
      </View>
    </RectButton>
  );
};

export default Button;
