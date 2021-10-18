<<<<<<< HEAD
import React, { useState } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeIcon from './assets/Icons/home.svg';
import SettingsIcon from './assets/Icons/setting.svg';
import GalleryIcon from './assets/Icons/collections.svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return <Tab.Navigator screenOptions={({ route }) => {
    return {
      tabBarIcon: ({ color, focused, size }) => {
        switch (route.name) {
          case 'Home':
            return <HomeIcon height={size} width={size} fill={color}></HomeIcon>
          case 'Gallery':
            return <GalleryIcon height={size} width={size} fill={color}></GalleryIcon>
          case 'Settings':
            return <SettingsIcon height={size} width={size} fill={color}></SettingsIcon>
          default:
            return null;
        }
      },
    };
  }}>
    <Tab.Screen name="Home" getComponent={() => require('./screens/Home').default} />
    <Tab.Screen name="Gallary" getComponent={() => require('./screens/Gallery').default} />
    <Tab.Screen name="Settings" getComponent={() => require('./screens/Settings').default} />
  </Tab.Navigator>
}

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const onReady = async () => {
    try {
      const res = await AsyncStorage.getItem('@user_info');
      if (res) {
        const user = JSON.parse(res);
        if (user.accessToken) {
          navigationRef.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <NavigationContainer ref={navigationRef} onReady={onReady}>
      <Stack.Navigator>
        <Stack.Group screenOptions={{
          headerTransparent: true,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            color: '#0D3846',
            fontWeight: '900',
          }
        }}>
          <Stack.Screen name="Login" getComponent={() => require('./screens/Login').default} />
          <Stack.Screen name="Register" getComponent={() => require('./screens/Register').default} />
          <Stack.Screen name="ForgetPassword" getComponent={() => require('./screens/Forgetpassword').default} />
        </Stack.Group>

        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeTabNavigation} /></Stack.Group>
=======
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeIcon from './assets/Icons/home.svg';
import SettingsIcon from './assets/Icons/settings.svg';
import CollectionsIcons from './assets/Icons/collections.svg';
import {useColorScheme} from 'react-native';
import {CustomDarkTheme, CustomLightTheme} from './theme/theme';

const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();

const GalleryStack = createNativeStackNavigator();

const SettingsStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          title: 'Home',
        }}
        name="HomePage"
        getComponent={() => require('./screens/Home').default}
      />
    </HomeStack.Navigator>
  );
};

const GalleryStackNavigation = () => {
  return (
    <GalleryStack.Navigator>
      <GalleryStack.Screen
        name="GalleryPage"
        getComponent={() => require('./screens/Gallery').default}
      />
    </GalleryStack.Navigator>
  );
};

const SettingsStackNavigation = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsPage"
        getComponent={() => require('./screens/Settings').default}
      />
      <SettingsStack.Screen
        name="ChangePassword"
        getComponent={() => require('./screens/ChangePassword').default}
      />
    </SettingsStack.Navigator>
  );
};

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({color, focused, size}) => {
            switch (route.name) {
              case 'Home':
                return <HomeIcon height={size} width={size} fill={color} />;
              case 'Gallery':
                return (
                  <CollectionsIcons height={size} width={size} fill={color} />
                );
              case 'Settings':
                return <SettingsIcon height={size} width={size} fill={color} />;
              default:
                return null;
            }
          },
          headerShown: false,
        };
      }}>
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="Gallery" component={GalleryStackNavigation} />
      <Tab.Screen name="Settings" component={SettingsStackNavigation} />
    </Tab.Navigator>
  );
};

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const scheme = useColorScheme();

  const onReady = async () => {
    try {
      const res = await AsyncStorage.getItem('@user_info');
      if (res) {
        const user = JSON.parse(res);
        if (user.accessToken) {
          navigationRef.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      theme={scheme === 'dark' ? CustomDarkTheme : CustomLightTheme}>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerTransparent: true,
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              color: 'red',
              fontWeight: '700',
            },
          }}>
          <Stack.Screen
            name="Login"
            getComponent={() => require('./screens/Login').default}
          />
          <Stack.Screen
            name="Register"
            getComponent={() => require('./screens/Register').default}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeTabNavigation} />
        </Stack.Group>
        <Stack.Screen
          options={{
            title: 'Details',
            headerTransparent: true,
            headerShadowVisible: false,
          }}
          name="DetailsPage"
          getComponent={() => require('./screens/Details').default}
        />
>>>>>>> aceac507ff0a1817282f5b67984daa575e946082
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// import React, { useEffect, useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   KeyboardAvoidingView,
//   Keyboard,
//   Platform,
//   ImageBackground,
//   StatusBar
// } from 'react-native';
// import FastImage from 'react-native-fast-image';
// import Typography from './components/Typography';
// // import { fields, loginInitialValues } from './loginFields';
// import { registerfields, registerInitFields } from './registerFields';
// import Form from './components/Form';
// import Login from './screens/Login';
// import Register from './screens/Register';
// import ForgetPassword from './screens/ForgetPassword';


// // Layout

// const App = () => {

//   const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
//   const passwordInputRef = useRef(null);
//   useEffect(() => {
//     //componentdidmount
//     const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
//       setIsKeyboardVisible(true);
//     });

//     const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
//       setIsKeyboardVisible(false);
//     });
//     return () => {
//       //componentWillUnmount
//       keyboardDidShow.remove();
//       keyboardDidHide.remove();

//     };
//   }, []);
//   return (
//     <>
//       <StatusBar hidden />
//       <ImageBackground source={require('./assets/images/banner/banner.jpg')} style={{ flex: 1 }}>

//         <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
//           <View style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             paddingVertical: 10
//           }}>
//             <FastImage
//               source={{
//                 uri: 'https://reactjs.org/logo-og.png',
//                 priority: FastImage.priority.high,
//               }}
//               style={{
//                 height: isKeyboardVisible ? 50 : 100,
//                 width: isKeyboardVisible ? 50 : 100,
//                 borderRadius: 50,

//               }}
//               resizeMode="cover"
//             />
//           </View>

//           {/* <Form fields={fields}
//             initialValues={loginInitialValues}
//             onSubmit={value => {
//               console.warn(value);
//               Keyboard.dismiss();
//             }}
//           /> */}
//           {/* <Form fields={registerfields}
//             initialValues={registerInitFields}
//             onSubmit={value => {
//               console.warn(value);
//               Keyboard.dismiss();
//             }}
//           /> */}
//           {/* <Login /> */}

//           {/* <Register /> */}
//           <ForgetPassword />
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </>
//   );
// };


// export default App;*/}


// import React from 'react';
// import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
// import commonStyles from './commonStyles';
// import FastImage from 'react-native-fast-image';
// import Typography from './components/Typography';
// import Input from './components/Input';
// import { RectButton } from 'react-native-gesture-handler';
// import Checkbox from './components/Checkbox';


// // Layout

// const App = () => {
//   return (
//     <SafeAreaView style={[commonStyles.flex]}>
//       <FastImage
//         source={{
//           uri: 'https://reactjs.org/logo-og.png',
//           priority: FastImage.priority.high,
//         }}
//         style={{
//           height: 100,
//           width: 100,
//           borderRadius: 50,
//           alignSelf: 'center',
//           marginTop: 20
//         }}
//         resizeMode="cover"
//       />
//       <Typography
//         variant="h1"
//         style={{ marginVertical: 20, textAlign: 'center' }}>
//         SignUp
//       </Typography>
//       <Input placeholder="Username" />
//       <Input placeholder="Email" keyboardType="email-address" />
//       <Input placeholder="Password" secureTextEntry />
//       <Input placeholder="Confirm Password" secureTextEntry />



//       {/* <TouchableOpacity onPress={() => { }} activeOpacity={0.8}>
//         <View style={{
//           width: 200,
//           height: 40,
//           borderRadius: 12,
//           fontSize: 28,
//           justifyContent: 'center',
//           backgroundColor: '#0D3846',
//           alignSelf: 'center',
//           textAlign: 'center',
//           color: 'white',
//           margin: 20,
//           padding: 5
//         }}>
//           <Text
//             style={{
//               textAlign: 'center',
//               color: "#fff",
//             }}>SignUp</Text>
//         </View>
//       </TouchableOpacity> */}
//       <RectButton onPress={() => { }} style={{ backgroundColor: '#0D3846', }}>
//         <View accessible accessibilityRole="button" style={{
//           height: 40,
//           borderRadius: 12,
//           fontSize: 28,
//           justifyContent: 'center',
//           alignSelf: 'center',
//           textAlign: 'center',
//           color: 'white',
//         }}>
//           <Text style={{
//             textAlign: 'center',
//             color: "#fff",
//           }}>SignUp</Text>
//         </View>
//       </RectButton>

//     </SafeAreaView >
//   );
// };


// export default App;

