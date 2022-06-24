import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Snackbar,
} from '@material-ui/core';

import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import { PasswordInput } from './PasswordInput';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { api } from '../util/api';
import { Spinner } from './Spinner';

const SignUp = ({ setOpen, setSeverity, setMessage, open }) => {
  const paperStyle = {
    padding: 20,
    backgroundColor: '#707070',
    color: '#fff',
    width: 300,
    margin: '0 auto',
  };

  const avatarStyle = { backgroundColor: '#EE581A' };
  const headerStyle = { margin: 0 };
  const initialValues = {
    name: '',
    email: '',
    password: '',
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Required'),
    email: Yup.string()
      .email('Enter a valid email')
      .min(6, 'Email must be at least 6 characters')
      .max(64, 'Email must be at most 64 characters')
      .required('Required'),
    password: Yup.string().required('Required'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password')], 'Password not matched')
      .required('Required'),
    termsAndConditions: Yup.string().oneOf(
      ['true'],
      'Accept Terms & Conditions'
    ),
  });

  const onSubmit = async (values, props) => {
    try {
      const response = await api.post('/register', values);
      const { data, status } = response;
      console.log('Testando');
      console.log(response, 'This is the data value from the sign up screen');
      setMessage(data.message);
      setSeverity('success');
      setOpen(true);
    } catch (error) {
      // const { data, status } = response;
      setOpen(true);
      setSeverity('error');
      console.log(error);
      // console.log(response, 'This is the data value from the sign up screen');
      setMessage(error.response.data.message);
    }

    // if (status === 200) {
    //   setSeverity('success');
    // } else if (status === 500) {
    //   setSeverity('error');
    // }

    setTimeout(() => {
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <SportsBasketballIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>
            Please fill out this form to create an account !
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              {props.isSubmitting && <Spinner />}
              <Field
                as={TextField}
                label='Name'
                placeholder='Enter name'
                fullWidth
                required
                name='name'
                helperText={<ErrorMessage name='name' />}
              />
              <Field
                as={TextField}
                label='E-mail'
                name='email'
                placeholder='Enter e-mail'
                fullWidth
                required
                helperText={<ErrorMessage name='email' />}
              />
              <PasswordInput
                label='Password'
                name='password'
                placeholder='Enter password'
              />
              <PasswordInput
                label='Confirm Password'
                name='confirm_password'
                placeholder='Enter password'
              />

              <FormControlLabel
                control={<Field as={Checkbox} color='Primary' />}
                name='termsAndConditions'
                label='Terms and Conditions'
              />
              <FormHelperText>
                <ErrorMessage name='termsAndConditions' />
              </FormHelperText>
              <Button
                type='submit'
                fullWidth
                disabled={props.isSubmitting}
                variant='contained'
                color='Primary'
              >
                {props.isSubmitting ? 'Loading' : 'Sign Up'}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export { SignUp };
