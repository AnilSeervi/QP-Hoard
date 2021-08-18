import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import ScrollTabs from "./ScrollTabs";
import { useHistory, useLocation } from "react-router";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import Brightness7RoundedIcon from "@material-ui/icons/Brightness7Rounded";
import CloudOffRoundedIcon from "@material-ui/icons/CloudOffRounded";
import { useCallback, useContext } from "react";
import { appContext } from "../App";
import useIsOnline from "../Hooks/useIsOnline";
const useStyles = makeStyles({
  toolbar: {
    justifyContent: "center",
  },
  h1Style: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconMargin: {
    marginRight: 10,
  },
  left: {
    position: "absolute",
    left: 5,
  },
  right: {
    position: "absolute",
    right: 5,
  },
  offlinePara: {
    color: "rgb(255 255 255 / 70%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
const Navbar = ({ logo }) => {
  const onlineStatus = useIsOnline();
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(appContext);
  const handleThemeChange = useCallback(() => {
    localStorage.setItem("theme", darkMode ? false : true);
    setDarkMode((prev) => !prev);
    // eslint-disable-next-line
  }, [darkMode]);
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        {location.pathname !== "/" && (
          <Tooltip
            arrow
            title="Back"
            aria-label="Back"
            placement="right"
            className={classes.left}
          >
            <IconButton onClick={() => history.goBack()}>
              <ArrowBackIosRoundedIcon fontSize="small" color="secondary" />
            </IconButton>
          </Tooltip>
        )}
        <Typography
          variant={window.innerWidth <= 768 ? "h5" : "h4"}
          className={classes.h1Style}
          color="secondary"
          component="h1"
          onClick={() => history.push("/")}
        >
          <SchoolRoundedIcon
            fontSize={window.innerWidth <= 768 ? "default" : "large"}
            className={classes.iconMargin}
          />
          {logo}
        </Typography>
        <Tooltip
          arrow
          title="toggle light/dark theme"
          aria-label="theme"
          placement="left"
          className={classes.right}
        >
          <IconButton onClick={handleThemeChange}>
            {darkMode ? <Brightness7RoundedIcon /> : <Brightness4RoundedIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
      {!onlineStatus ? (
        <Typography className={classes.offlinePara} align="center" gutterBottom>
          <CloudOffRoundedIcon />
          You are browsing offline
        </Typography>
      ) : null}
      {location.pathname !== "/" && <ScrollTabs />}
    </AppBar>
  );
};

export default Navbar;
