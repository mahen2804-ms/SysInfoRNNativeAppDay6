import React from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import commonStyles from './commonStyles';
import FastImage from 'react-native-fast-image';
import Typography from './components/Typography';
import Input from './components/Input';

// Layout
const register = () => {
  return (
    <SafeAreaView style={[commonStyles.flex]}>
      <FastImage
        source={{
          uri: 'https://reactjs.org/logo-og.png',
          priority: FastImage.priority.high,
        }}
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          alignSelf: 'center',
        }}
        resizeMode="cover"
      />
      <Typography
        variant="h1"
        style={{ marginVertical: 20, textAlign: 'center' }}>
        SignUp
      </Typography>
      <Input placeholder="Username" />
      <Input placeholder="Password" secureTextEntry />
      <Typography
        variant="h3"
        style={{ textAlign: 'center', width: 200, height: 40, borderRadius: 12, }}>
        SignUp
      </Typography>
    </SafeAreaView>
  );
};

export default App;
