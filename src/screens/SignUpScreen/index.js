import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Page from "components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SignUpScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page className={classes.root} title="Register">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: "",
              nickName: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              nickName: Yup.string().max(255).required("Nick name is required"),
              password: Yup.string().max(255).required("password is required"),
              confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            })}
            onSubmit={() => {
              navigate("/app/dashboard", { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.nickName && errors.nickName)}
                  fullWidth
                  helperText={touched.nickName && errors.nickName}
                  label="Nick name"
                  margin="normal"
                  name="nickName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.nickName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  fullWidth
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  label="Confirm Password"
                  margin="normal"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                <Link component={RouterLink} to="/signin" variant="h6">
                  Sign in
                </Link>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default SignUpScreen;
