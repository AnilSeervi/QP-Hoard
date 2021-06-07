import { useContext, useEffect, useMemo, useState } from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CodeIcon from "@material-ui/icons/Code";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { useHistory, useLocation } from "react-router";
import { appContext } from "../App";
const useStyles = makeStyles({
  botnav: {
    position: "sticky",
    bottom: 0,
  },
});

const BottomNav = () => {
  const [value, setValue] = useState(null);
  const { logo, setLogo, darkMode } = useContext(appContext);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const navTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#F9A527" : "#651fff",
          },
        },
      }),
    [darkMode]
  );
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setLogo("QP Hoard");
        document.title = `${logo} - Question Paper Bank`;
        setValue(null);
        break;
      case "/bba":
        setLogo(() => "QP Hoard | BBA");
        document.title = `${logo}`;
        setValue(0);
        break;
      case "/bca":
        setLogo(() => "QP Hoard | BCA");
        document.title = logo;
        setValue(1);
        break;
      case "/bcom":
        setLogo(() => "QP Hoard | BCOM");
        document.title = logo;
        setValue(2);
        break;
      default:
        setLogo(() => "QP Hoard");
        document.title = "Page Not Available";
        setValue(null);
        break;
    }
  }, [location.pathname, setLogo, logo]);
  return (
    <ThemeProvider theme={navTheme}>
      <nav className={classes.botnav}>
        <BottomNavigation
          value={value}
          onChange={(e, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction
            label="BBA"
            onClick={() => history.push("/bba")}
            icon={<TrendingUpIcon fontSize="small" />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            onClick={() => history.push("/bca")}
            label="BCA"
            icon={<CodeIcon fontSize="small" />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="BCOM"
            onClick={() => history.push("/bcom")}
            icon={<AccountBalanceIcon fontSize="small" />}
          ></BottomNavigationAction>
        </BottomNavigation>
      </nav>
    </ThemeProvider>
  );
};

export default BottomNav;
