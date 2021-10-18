<<<<<<< HEAD
import { Field, Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import Button from '../Button';
import Typography from '../Typography';
const Form = ({ fields, btnProps, ...rest }) => {
    return (
        <Formik {...rest}>
            {({ handleSubmit, errors }) => (
                <>
                    {errors.serverError && (
                        <Typography variant='error' style={{
                            color: "red",
                            fontSize: 14,
                            alignSelf: 'center',
                            letterSpacing: 0.2,
                            fontWeight: '500',
                        }}>{errors.serverError}</Typography>)}
                    {fields.map(x => (<Field key={x.name} {...x} />
                    ))}
                    <Button {...btnProps} onPress={handleSubmit} />

                </>

            )}
        </Formik>
    );
=======
import {Field, Formik} from 'formik';
import React from 'react';
import Button from '../Button';
import Typography from '../Typography';

const Form = ({fields, btnProps, ...rest}) => {
  return (
    <Formik {...rest}>
      {({handleSubmit, errors}) => (
        <>
          {errors.serverError && (
            <Typography
              variant="error"
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '600',
                padding: 10,
              }}>
              {errors.serverError}
            </Typography>
          )}
          {fields.map(x => (
            <Field key={x.name} {...x} />
          ))}
          <Button {...btnProps} onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
>>>>>>> aceac507ff0a1817282f5b67984daa575e946082
};

export default Form;
