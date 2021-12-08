import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Page from "components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const ValidateEmailScreen = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.handleGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Page className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="xs">
          <Typography color="textPrimary" variant="h4">
            帳號未驗證
          </Typography>
          <Button color="primary" variant="contained" onClick={() =>{
            props.handleResendValidationEmail();
          }}>
            ValidateEmailScreen
          </Button>
        </Container>
      </Box>
    </Page>
  );
};

export default ValidateEmailScreen;
