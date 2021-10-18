import React from 'react'
import { View } from 'react-native';
import Form from '../../components/Form';
import { useHeaderHeight } from '@react-navigation/elements';
import { passwordfields, passwordInitFields } from './fields';


const ForgetPassword = () => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={{ paddingTop: headerHeight, flex: 1 }}>
            <Form
                validate={values => {
                    let errors = {};
                    if (values.password !== values.confirmpassword) {
                        errors.confirmpassword = 'Please Enter Password and confirm must be Same';
                    }
                    return errors;
                }}
                fields={passwordfields}
                initialValues={passwordInitFields}
                btnProps={{
                    title: 'forgetPassword',
                }}
                onSubmit={value => {
                    console.warn(value);
                    Keyboard.dismiss();
                }}
            />
        </View>
    )
}

export default ForgetPassword;


