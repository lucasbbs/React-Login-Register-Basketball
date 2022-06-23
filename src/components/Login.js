import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/styles";

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { api } from "../util/api";
import { PasswordInput } from "./PasswordInput";
import { Spinner } from "./Spinner";
import { TOKEN_KEY } from "../util/auth";
import withRoot from "./withRoots";

const styles = {
  "input-label": {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    color: "red"
  },

  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "blue"
    }
  }
};

const Login = ({ handleChange, classes }) => {
  const buttonStyle = { margin: "8px 0" };
  const headerStyle = { margin: 0 };
  const paperStyle = {
    color: "#fff",
    backgroundColor: "#1e1e2f",
    padding: 20,
    height: "370.5px",
    width: 300,
    margin: "0 auto"
  };

  const avatarStyle = {
    backgroundColor: "#EE581A"
  };
  const initialValues = {
    email: "",
    password: "",
    remember: false
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .min(6, "Email must be at least 6 characters")
      .max(64, "Email must be at most 64 characters")
      .required("Required"),
    password: Yup.string().required("Required")
  });

  const onSubmit = (values, props) => {
    api.post("/login", values);
    console.log(values);
    localStorage.setItem(
      TOKEN_KEY,
      JSON.stringify({
        name: "Lucas",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTYwMDcxNDUsImV4cCI6MTY1ODU5OTE0NX0.xaiZnEthm5etNtU1OLCKqnHKUn99Le73H8GCZXhAipw"
      })
    );
    setTimeout(() => {
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon color="#FFF" />
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
                color="#FFF"
                name="email"
                label="e-mail"
                placeholder="Enter e-mail"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <PasswordInput
                name="password"
                label="Password"
                placeholder="Enter password"
              />
              <Field
                as={FormControlLabel}
                name="remember"
                label="Remember me"
                control={<Checkbox color="Primary" />}
                helperText={<ErrorMessage name="remember" />}
              />
              <Button
                type="submit"
                style={buttonStyle}
                variant="contained"
                fullWidth
                disabled={props.isSubmitting}
                color="Primary"
              >
                {props.isSubmitting ? "Loading" : "Sign In"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#" onClick={(e) => e.preventDefault()}>
            Forgot Password
          </Link>
        </Typography>
        <Typography>
          Don't you have an account?{" "}
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export { Login };
