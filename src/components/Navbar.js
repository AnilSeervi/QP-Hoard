import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import ScrollTabs from "./ScrollTabs";
import { useHistory, useLocation } from "react-router";
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
});
const Navbar = ({ logo, value, setValue }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h4"
          className={classes.h1Style}
          component="h1"
          onClick={() => history.push("/")}
        >
          <SchoolRoundedIcon fontSize="large" className={classes.iconMargin} />
          {logo}
        </Typography>
      </Toolbar>
      {location.pathname !== "/" && (
        <ScrollTabs value={value} setValue={setValue} />
      )}
    </AppBar>
  );
};

export default Navbar;
