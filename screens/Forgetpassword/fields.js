import { createRef } from 'react';
import Input from '../../components/Input';
const emailRef = createRef();
const passwordRef = createRef();
const ConfirmPasswordRef = createRef();

export const passwordfields = [
    {
        innerRef: emailRef,
        placeholder: "Email",
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
        placeholder: "Conform Password",
        secureTextEntry: true,
        returnKeyType: "done",
        innerRef: ConfirmPasswordRef,
        name: "confirmpassword",
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Required...';
            }
            return '';

        }
    },
];

export const passwordInitFields = {
    emailRef: '',
    password: '',
    confirmpassword: '',
};