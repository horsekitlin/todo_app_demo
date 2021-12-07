import React from "react";
import "utils/firebase";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import theme from "theme";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
