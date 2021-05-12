import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Container, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { valueContext } from "../App";
const ScrollTabs = () => {
  const { value, setValue } = useContext(valueContext);
  const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
  });
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }
  const classes = useStyles();
  return (
    <>
      <Container classes={{ root: classes.root }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="secondary"
        >
          <Tab label="Semester 1" {...a11yProps(0)} />
          <Tab label="Semester 2" {...a11yProps(1)} />
          <Tab label="Semester 3" {...a11yProps(2)} />
          <Tab label="Semester 4" {...a11yProps(3)} />
          <Tab label="Semester 5" {...a11yProps(4)} />
          <Tab label="Semester 6" {...a11yProps(5)} />
        </Tabs>
      </Container>
    </>
  );
};

export default ScrollTabs;
