import Accord from "../components/Accord";
import TabPanel from "../components/TabPanel";
import SwipeableViews from "react-swipeable-views";
import { useContext } from "react";
import { appContext } from "../App";

const Render = ({ data }) => {
  const { value, setValue } = useContext(appContext);
  const arr = Array(6).fill(0);
  const handleIndexChange = (index) => {
    setValue(index);
  };
  return (
    <section className="main-cont">
      <SwipeableViews
        resistance
        index={value}
        onChangeIndex={handleIndexChange}
      >
        {arr.map((_, idx) => (
          <TabPanel index={idx} key={idx}>
            <Accord allData={data} sem={`semester-${idx + 1}`} />
          </TabPanel>
        ))}
      </SwipeableViews>
    </section>
  );
};

export default Render;
