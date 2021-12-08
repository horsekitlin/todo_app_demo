import React, { useState } from "react";
import isEmpty from "lodash/isEmpty";
import * as Yup from "yup";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { validate } from "utils/yupCheck";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const loginRequestSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .required("密碼不可為空")
    .matches(
      /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
      "密碼必須是 8個字符 的英數混合並且包含一個特殊字元"
    ),
});

const SignInScreen = (props) => {
  const classes = useStyles();
  const [formData, setFormSata] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={async (e) => {
            e.preventDefault();
            const { isValid, errors } = validate(
              loginRequestSchema,
              formData,
              false
            );
            if (isValid) {
              props.handleSignIn(formData);
            }
            setErrors(errors);
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={!isEmpty(errors.email)}
            helperText={errors.email}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={(e) =>
              setFormSata({ ...formData, email: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={!isEmpty(errors.password)}
            helperText={errors.password}
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) =>
              setFormSata({ ...formData, password: e.target.value })
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            onClick={async () => {
              const auth = getAuth();
              const provider = new FacebookAuthProvider();
              const result = await signInWithPopup(auth, provider);
              const user = result.user;
              const payload = {
                token: user.accessToken,
                email: user.email,
              };
              props.handleThirdPartySignIn(payload);
            }}
          >
            Facebook Login
          </Button>
          <Button
            onClick={async () => {
              const auth = getAuth();
              const provider = new GoogleAuthProvider();
              const result = await signInWithPopup(auth, provider);
              const user = result.user;
              const payload = {
                token: user.accessToken,
                email: user.email,
              };
              props.handleThirdPartySignIn(payload);
            }}
          >
            Google Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignInScreen;
