<<<<<<< HEAD
import React from 'react'
import { ActionSheetIOS, View } from 'react-native';
import Form from '../../components/Form';
import { useHeaderHeight } from '@react-navigation/elements';
import { registerfields, registerInitFields } from './fields';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../utils/axiosinstance';


const Register = ({ navigation }) => {
    const headerHeight = useHeaderHeight();
    const onSubmit = async (values, actions) => {
        try {
            const { confirmpassword, ...rest } = values;
            const res = await axiosInstance.post('register', rest);
            await AsyncStorage.setItem('@user_info', JSON.stringify(res.data));
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (error) {
            actions.setErrors({ serverError: error.response.data });
        }
    };
    return (
        <View
            style={{ marginTop: headerHeight, flex: 1 }}>
            <Form
                validate={values => {
                    let errors = {};
                    if (values.password !== values.confirmpassword) {
                        errors.confirmpassword = 'Please Enter Password and confirm must be Same';
                    }
                    return errors;
                }}
                fields={registerfields}
                initialValues={registerInitFields}
                onSubmit={onSubmit}
                btnProps={{
                    title: 'Register',
                }}
            />
        </View>
    )
}

export default Register;


=======
import React from 'react';
import {View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import Form from '../../components/Form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {registerFields, registerInitialValues} from './fields';
import axiosInstance from '../../utils/axiosInstance';

const Register = ({navigation}) => {
  const headerHeight = useHeaderHeight();
  const onSubmit = async (values, actions) => {
    try {
      const {confirmPassword, ...rest} = values;
      const res = await axiosInstance.post('register', rest);
      await AsyncStorage.setItem('@user_info', JSON.stringify(res.data));
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } catch (error) {
      actions.setErrors({serverError: error.response.data});
    }
  };

  return (
    <View style={{paddingTop: headerHeight, flex: 1}}>
      <Form
        validate={values => {
          let errors = {};
          if (values.password !== values.confirmPassword) {
            errors.confirmPassword =
              'Confirm Password should match with password';
          }
          return errors;
        }}
        fields={registerFields}
        initialValues={registerInitialValues}
        btnProps={{
          title: 'Register',
        }}
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default Register;
>>>>>>> aceac507ff0a1817282f5b67984daa575e946082
