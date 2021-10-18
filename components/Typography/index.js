import React from 'react';
<<<<<<< HEAD
import { Text } from 'react-native';
import styles from './styles';

const Typography = ({ children, variant, style, ...rest }) => {
  return (
    <Text
      style={[styles.defaultColor, styles[variant], style]}
=======
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

const Typography = ({children, variant, style, ...rest}) => {
  const {colors} = useTheme();
  return (
    <Text
      style={[styles[variant], {color: colors.text}, style]}
>>>>>>> aceac507ff0a1817282f5b67984daa575e946082
      allowFontScaling={false}
      {...rest}>
      {children}
    </Text>
  );
}
export default Typography;
