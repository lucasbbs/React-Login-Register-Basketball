import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutline';

const SignUp = () => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };

  const avatarStyle = { backgroundColor: '#1BBD7E' };
  const headerStyle = { margin: 0 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>
            Please fill out this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField label='Name' placeholder='Enter name' fullWidth required />
          <TextField
            label='E-mail'
            placeholder='Enter e-mail'
            fullWidth
            required
          />
          <TextField
            label='Password'
            type='password'
            placeholder='Enter password'
            fullWidth
            required
          />
          <TextField
            label='Confirm Password'
            type='password'
            placeholder='Enter password'
            fullWidth
            required
          />
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
          <Button type='submit' fullWidth variant='contained' color='Primary'>
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export { SignUp };
