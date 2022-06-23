import React from 'react';
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
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {
  const buttonStyle = { margin: '8px 0' };

  const paperStyle = {
    padding: 20,

    width: 280,
    margin: '20px auto',
  };

  const avatarStyle = {
    backgroundColor: '#1BBD7E',
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>

        <TextField
          label='e-mail'
          placeholder='Enter e-mail'
          fullWidth
          required
        />
        <TextField
          label='password'
          type='password'
          placeholder='Enter password'
          fullWidth
          required
        >
          <LockOutlinedIcon />
        </TextField>
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              onChange={() => console.log('teste')}
              name='checkedB'
              color='Primary'
            />
          }
          label='Remember me'
        />
        <Button
          type='submit'
          style={buttonStyle}
          variant='contained'
          fullWidth
          color='Primary'
        >
          Sign Up
        </Button>
        <Typography>
          <Link href='#' onClick={(e) => e.preventDefault()}>
            Forgot Password
          </Link>
        </Typography>
        <Typography>
          Don't you have an account?{' '}
          <Link href='#' onClick={(e) => e.preventDefault()}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export { Login };
