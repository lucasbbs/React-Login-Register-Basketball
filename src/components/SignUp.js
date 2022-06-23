import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from "@material-ui/core";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import { PasswordInput } from "./PasswordInput";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };

  const avatarStyle = { backgroundColor: "#EE581A" };
  const headerStyle = { margin: 0 };
  const initialValues = {
    name: "",
    email: "",
    password: "",
    termsAndConditions: false
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Required"),
    email: Yup.string()
      .email("Enter a valid email")
      .min(6, "Email must be at least 6 characters")
      .max(64, "Email must be at most 64 characters")
      .required("Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept Terms & Conditions"
    )
  });

  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <SportsBasketballIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
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
              <Field
                as={TextField}
                label="Name"
                placeholder="Enter name"
                fullWidth
                required
                name="name"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                label="E-mail"
                name="email"
                placeholder="Enter e-mail"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <PasswordInput
                label="Password"
                name="password"
                placeholder="Enter password"
              />
              <PasswordInput
                label="Confirm Password"
                name="confirm_password"
                placeholder="Enter password"
              />

              <FormControlLabel
                control={<Field as={Checkbox} color="Primary" />}
                name="termsAndConditions"
                label="Terms and Conditions"
              />
              <FormHelperText>
                <ErrorMessage name="termsAndConditions" />
              </FormHelperText>
              <Button
                type="submit"
                fullWidth
                disabled={props.isSubmitting}
                variant="contained"
                color="Primary"
              >
                {props.isSubmitting ? "Loading" : "Sign Up"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export { SignUp };
