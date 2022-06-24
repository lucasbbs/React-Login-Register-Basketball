import React, { useState } from 'react';

import MuiAlert from '@mui/material/Alert';

import { Paper, Tabs, Tab, Box, Typography, Snackbar } from '@material-ui/core';
import { Login } from '../components/Login';
import { SignUp } from '../components/SignUp';
import basketballTeam from '../assets/basketballTeam.mp4';
import logo from '../assets/logo.png';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} {...other}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const SignInOutContainer = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle = {
    color: '#fff',
    width: 340,
    margin: '-30px auto',
    backgroundColor: '#1e1e2f',
  };

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <img
        alt='Logo Basketball App'
        src={logo}
        width={200}
        style={{
          marginTop: -15,
          webkitFilter: 'drop-shadow(5px 5px 8px #fff)',
          filter: 'drop-shadow(8px 8px 8px #fff)',
        }}
      />
      <Paper elevation={20} style={paperStyle}>
        <Tabs
          style={{ color: '#fff' }}
          value={value}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          onChange={handleChange}
          aria-label='disabled tabs example'
        >
          <Tab
            label='Sign In'
            style={{ color: value === 0 ? 'orange' : '#fff' }}
          />

          <Tab
            label='Sign Up'
            style={{ color: value === 1 ? 'orange' : '#fff' }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Login handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp
            open={open}
            setOpen={setOpen}
            setSeverity={setSeverity}
            setMessage={setMessage}
          />
        </TabPanel>
      </Paper>
      <video
        style={{
          background:
            'linear-gradient(to right,rgba(65, 0, 255, 0.4),rgba(255, 0, 232, 0.3))',
          position: 'fixed',
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
          zIndex: -1,
        }}
        autoPlay
        muted
        loop
      >
        <source src={basketballTeam} type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
    </>
  );
};
export { SignInOutContainer };
