import React from "react";
import queryString from 'query-string';
import { useNavigate } from "react-router-dom";
import {
  Box,  
  Button,
  makeStyles,
} from "@material-ui/core";
import Page from "components/Page";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const handleSubmitByThirdParty = (provider, navigate) => async () => {
  try {
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const payload = {
      googleId: user.uid,
      email: user.email,
      name: user.displayName,
    };
    const search = queryString.stringify(payload);
    navigate({
      pathname: '/signupform',
      search: `?${search}`,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js ~ line 121 ~ onClick={ ~ error",
      error
    );
  }
};

const SignUpScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page className={classes.root} title="Register">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        alignItems='center'
        justifyContent="center"
      >
        <Box width='30%'> 
          <Button  fullWidth color='primary' variant='contained' style={{ height: 50 }} onClick={() => navigate({pathname: '/signupform'})}>
            <p>Email Login</p>
          </Button>
        </Box>
        <Box width='30%'>
          <FacebookLoginButton text='Registe With Facebook' onClick={handleSubmitByThirdParty(new FacebookAuthProvider(), navigate)}  />
        </Box>
        <Box width='30%'>
          <GoogleLoginButton text='Registe With Google' onClick={handleSubmitByThirdParty(new GoogleAuthProvider(), navigate)} />
        </Box>
      </Box>
    </Page>
  );
};

export default SignUpScreen;
