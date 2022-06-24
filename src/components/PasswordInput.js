import { Button, InputAdornment, TextField } from '@material-ui/core';
import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const PasswordInput = ({ label, name, placeholder }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <Field
      as={TextField}
      name={name}
      label={label}
      type={passwordVisible ? 'text' : 'password'}
      placeholder={placeholder}
      fullWidth
      required
      helperText={<ErrorMessage name={name} />}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <Button onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};
export { PasswordInput };
