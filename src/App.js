import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Home from "./router/Home";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import React, { useEffect, useMemo, useState } from "react";
import useFetch from "./Hooks/useFetch";
import Render from "./router/Render";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import InstallPWA from "./components/InstallPWA";
import Error from "./router/404";

export const appContext = React.createContext();

function App() {
  const { data } = useFetch();
  const [logo, setLogo] = useState("QP Hoard");
  const [value, setValue] = useState(0);
  const [darkMode, setDarkMode] = useState(() =>
    JSON.parse(localStorage.getItem("theme"))
  );
  const media = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      setDarkMode(media);
    }
  }, [media]);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          background: {
            default: darkMode ? "#303030" : "#f5f5f5",
          },

          type: darkMode ? "dark" : "light",
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
      }),
    [darkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <appContext.Provider
          value={{
            value,
            setValue,
            logo,
            setLogo,
            darkMode,
            setDarkMode,
          }}
        >
          <Navbar logo={logo} />
          <main>
            <Container fixed>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/bca">{data && <Render data={data.bca} />}</Route>
                <Route path="/bcom">
                  {data && <Render data={data.bcom} />}
                </Route>
                <Route path="/bba">{data && <Render data={data.bba} />}</Route>
                <Route path="*" component={Error} />
              </Switch>
              <InstallPWA />
            </Container>
          </main>
          <BottomNav />
        </appContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
