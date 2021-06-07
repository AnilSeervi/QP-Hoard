import Accord from "../components/Accord";
import TabPanel from "../components/TabPanel";

const Render = ({ data }) => {
  return (
    <section className="main-cont">
      <TabPanel index={0}>
        <Accord allData={data} sem="semester-1" />
      </TabPanel>
      <TabPanel index={1}>
        <Accord allData={data} sem="semester-2" />
      </TabPanel>
      <TabPanel index={2}>
        <Accord allData={data} sem="semester-3" />
      </TabPanel>
      <TabPanel index={3}>
        <Accord allData={data} sem="semester-4" />
      </TabPanel>
      <TabPanel index={4}>
        <Accord allData={data} sem="semester-5" />
      </TabPanel>
      <TabPanel index={5}>
        <Accord allData={data} sem="semester-6" />
      </TabPanel>
    </section>
  );
};

export default Render;
