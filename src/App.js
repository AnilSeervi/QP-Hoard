import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Bba from "./router/Bba";
import Bca from "./router/Bca";
import Bcom from "./router/Bcom";
import Home from "./router/Home";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import { useState } from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#834bff",
      main: "#651fff",
      dark: "#4615b2",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
  },
});

function App() {
  const logo = "QP Hoard";
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar logo={logo} setValue={setValue} value={value} />
        <Container fixed>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/BCA">
              <Bca value={value} />
            </Route>
            <Route path="/BCOM">
              <Bcom value={value} />
            </Route>
            <Route path="/BBA">
              <Bba value={value} />
            </Route>
            <Route path="*">
              <main className="main-cont">
                <Typography variant="h5" component="h2">
                  Page not available
                </Typography>
                <Typography>
                  <Link to="/">Back to Homepage...</Link>
                </Typography>
              </main>
            </Route>
          </Switch>
        </Container>
        <BottomNav />
      </Router>
    </ThemeProvider>
  );
}

export default App;
