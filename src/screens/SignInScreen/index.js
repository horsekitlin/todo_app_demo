import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { signInAction } from "actions/authActions";
import {firebaseApp} from 'utils/firebase';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

console.log("🚀 ~ file: index.js ~ line 15 ~ firebaseApp", firebaseApp);
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

const getHandlers = (dispatch) => {
  return {
    handleSignIn: signInAction(dispatch),
  };
};

const SignInScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { handleSignIn } = getHandlers(dispatch);

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
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
              try {
                const auth = getAuth();
                console.log(
                  "🚀 ~ file: index.js ~ line 49 ~ useEffect ~ auth",
                  auth
                );
                const provider = new FacebookAuthProvider();
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
                console.log(
                  "🚀 ~ file: index.js ~ line 134 ~ .then ~ user",
                  user
                );
              } catch (error) {
                console.log(
                  "🚀 ~ file: index.js ~ line 121 ~ onClick={ ~ error",
                  error
                );
              }
            }}
          >
            Facebook Login
          </Button>
          <Button
            onClick={async () => {
              try {
                const auth = getAuth();
                console.log(
                  "🚀 ~ file: index.js ~ line 49 ~ useEffect ~ auth",
                  auth
                );
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
                console.log(
                  "🚀 ~ file: index.js ~ line 134 ~ .then ~ user",
                  user
                );
              } catch (error) {
                console.log(
                  "🚀 ~ file: index.js ~ line 121 ~ onClick={ ~ error",
                  error
                );
              }
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
