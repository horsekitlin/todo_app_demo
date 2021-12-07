import React from "react";
import "utils/firebase";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import store, { persistor } from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import theme from "theme";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
