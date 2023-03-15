import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material";
import Router from "./routes";

import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
        <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
