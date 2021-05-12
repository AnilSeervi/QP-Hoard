import { useContext } from "react";
import { valueContext } from "../App";

const TabPanel = (props) => {
  const { children, index, ...other } = props;
  const { value } = useContext(valueContext);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

export default TabPanel;
