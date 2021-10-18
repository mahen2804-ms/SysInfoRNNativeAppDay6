<<<<<<< HEAD
import { createRef } from 'react';
import Input from '../../components/Input';
const lastname = createRef();
const ageRef = createRef();
const emailRef = createRef();
const passwordRef = createRef();
const ConfirmPasswordRef = createRef();

export const registerfields = [
    {
        placeholder: "First Name",
        returnKeyType: "next",
        onSubmitEditing: () => {
            lastname.current.focus();
        },
        name: 'firstname',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Required...';
            };
            // if (value.lenght < 2 && value.lenght > 10) {
            //     return 'Please Enter valide name';
            // }
            return '';
        }
    },
    {
        innerRef: lastname,
        placeholder: "Last Name",
        returnKeyType: "next",
        onSubmitEditing: () => {
            ageRef.current.focus();
        },
        name: 'lastname',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Required...';
            };
            // if (value.lenght < 2 && value.lenght > 10) {
            //     return 'Please Enter valide name';
            // }
            return '';
        }
    },
    {
        innerRef: ageRef,
        placeholder: "Age",
        returnKeyType: "next",
        keyboardType: 'number-pad',
        maxLength: 3,
        onSubmitEditing: () => {
            emailRef.current.focus();
        },
        name: 'age',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Required...';
            }
            if (value < 0 && value > 150) {
                return 'value should be between 0 and 150';
            }
            return '';
        }
    },
    {
        innerRef: emailRef,
        placeholder: "Email",
        autoCapitalize: 'none',
        keyboardType: "email-address",
        returnKeyType: "next",

        onSubmitEditing: () => {
            passwordInputRef.current.focus();
        },
        name: 'email',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Required...';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                return 'Invalid email address';
            }
            return '';
        }
    },
    {
        placeholder: "Password",
        secureTextEntry: true,
        returnKeyType: "done",
        innerRef: passwordRef,
        name: "password",
        component: Input,
        onSubmitEditing: () => {
            ConfirmPasswordRef.current.focus();
        },
        validate: (value) => {
            if (!value) {
                return 'Required...';
            }
            return '';
        }
    },
    {
        innerRef: ConfirmPasswordRef,
        placeholder: "Conform Password",
        secureTextEntry: true,
        returnKeyType: "done",
        name: "confirmpassword",
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Required...';
            }
            return '';

        }
    },
    // {
    //     placeholder: "Mobile No: ",
    //     returnKeyType: "next",
    //     keyboardType: 'phone-pad',
    //     onSubmitEditing: () => {
    //         emailRef.current.focus();
    //     },
    //     name: 'mobno',
    //     component: Input,
    //     validate: (value) => {
    //         if (!value) {
    //             return 'Required...';
    //         }
    //         return '';
    //     }
    // }
];

export const registerInitFields = {
    firstname: '',
    lastname: '',
    age: '',
    email: '',
    password: '',
    confirmpassword: '',
    // mobno: '',
};
=======
import {createRef} from 'react';

import Input from '../../components/Input';

const emailRef = createRef();
const ageRef = createRef();
const lastNameRef = createRef();
const passwordRef = createRef();
const confirmPasswordRef = createRef();

export const registerFields = [
  {
    placeholder: 'First Name',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      lastNameRef.current.focus();
    },
    name: 'firstName',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    innerRef: lastNameRef,
    placeholder: 'Last Name',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      ageRef.current.focus();
    },
    name: 'lastName',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    innerRef: ageRef,
    placeholder: 'Age',
    returnKeyType: 'next',
    keyboardType: 'number-pad',
    maxLength: 3,
    onSubmitEditing: () => {
      emailRef.current.focus();
    },
    name: 'age',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      if (value < 1 || value > 100) {
        return 'Value should be between 0 and 100';
      }
      return '';
    },
  },
  {
    innerRef: emailRef,
    placeholder: 'Email',
    autoCapitalize: 'none',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      passwordRef.current.focus();
    },
    name: 'email',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
      }
      return '';
    },
  },
  {
    placeholder: 'Password',
    secureTextEntry: true,
    returnKeyType: 'done',
    innerRef: passwordRef,
    name: 'password',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
    onSubmitEditing: () => {
      confirmPasswordRef.current.focus();
    },
  },
  {
    innerRef: confirmPasswordRef,
    placeholder: 'Confirm Password',
    secureTextEntry: true,
    returnKeyType: 'done',
    name: 'confirmPassword',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      if (value.length < 5) {
        return '';
      }
      return '';
    },
  },
];

export const registerInitialValues = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
};
>>>>>>> aceac507ff0a1817282f5b67984daa575e946082
