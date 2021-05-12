import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Home from "./router/Home";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import React, { useState } from "react";
import useFetch from "./useFetch";
import Render from "./router/Render";

export const valueContext = React.createContext();
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
  const { data } = useFetch();
  const logo = "QP Hoard";
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <valueContext.Provider value={{ value: value, setValue: setValue }}>
          <Navbar logo={logo} />
          <Container fixed>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/bca">{data && <Render data={data.bca} />}</Route>
              <Route path="/bcom">{data && <Render data={data.bcom} />}</Route>
              <Route path="/bba">{data && <Render data={data.bba} />}</Route>
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
        </valueContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
