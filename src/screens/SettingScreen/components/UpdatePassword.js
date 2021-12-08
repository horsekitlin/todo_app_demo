import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";
import { Formik } from "formik";
import { passwordSchema } from "utils/schemas";

const UpdatePassword = ({ className, handleResetPassword, ...rest }) => {
  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

  return (
    <Card>
      <CardHeader subheader="Update password" title="Password" />
      <Divider />
      <CardContent>
        <Formik
          initialValues={{
            oldPassword: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object().shape({
            oldPassword: passwordSchema,
            password: passwordSchema,
            confirmPassword: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "Password must match"
            ),
          })}
          onSubmit={(payload) => {
            handleResetPassword(payload);
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                error={Boolean(touched.oldPassword && errors.oldPassword)}
                fullWidth
                helperText={touched.oldPassword && errors.oldPassword}
                label="Old Password"
                margin="normal"
                name="oldPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.oldPassword}
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
                value={values.password}
                variant="outlined"
              />
              <TextField
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
                fullWidth
                helperText={touched.confirmPassword && errors.confirmPassword}
                label="confirm Password"
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
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Update
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

UpdatePassword.propTypes = {
  className: PropTypes.string,
};

export default UpdatePassword;
