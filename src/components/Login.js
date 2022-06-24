import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@mui/material/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { api } from '../util/api';
import { PasswordInput } from './PasswordInput';
import { Spinner } from './Spinner';
import { TOKEN_KEY } from '../util/auth';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Login = ({ handleChange, classes }) => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const buttonStyle = { margin: '8px 0' };
  const headerStyle = { margin: 0 };
  const paperStyle = {
    color: '#fff',
    backgroundColor: '#707070',
    padding: 20,
    height: '370.5px',
    width: 300,
    margin: '0 auto',
  };

  const avatarStyle = {
    backgroundColor: '#EE581A',
  };
  const initialValues = {
    email: '',
    password: '',
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid email')
      .min(6, 'Email must be at least 6 characters')
      .max(64, 'Email must be at most 64 characters')
      .required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values, props) => {
    const response = await api.post('/login', values);
    const { data } = response;
    if (response.status === 200) {
      localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
      props.setSubmitting(false);
      setTimeout(() => {
        window.location.reload(false);
      }, 2000);
    }
  };
  return (
    <Grid>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon color='#FFF' />
          </Avatar>
          <h2 style={headerStyle}>Sign In</h2>
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
                color='#FFF'
                name='email'
                label='e-mail'
                placeholder='Enter e-mail'
                fullWidth
                required
                helperText={<ErrorMessage name='email' />}
              />
              <PasswordInput
                name='password'
                label='Password'
                placeholder='Enter password'
              />
              <Field
                as={FormControlLabel}
                name='remember'
                label='Remember me'
                control={<Checkbox color='Primary' />}
                helperText={<ErrorMessage name='remember' />}
              />
              <Button
                type='submit'
                style={buttonStyle}
                variant='contained'
                fullWidth
                disabled={props.isSubmitting}
                color='Primary'
              >
                {props.isSubmitting ? 'Loading' : 'Sign In'}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href='#' onClick={(e) => e.preventDefault()}>
            Forgot Password
          </Link>
        </Typography>
        <Typography>
          Don't you have an account?{' '}
          <Link href='#' onClick={() => handleChange('event', 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export { Login };
