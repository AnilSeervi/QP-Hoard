import Accord from "../components/Accord";
import TabPanel from "../components/TabPanel";

const Render = ({ value, data }) => {
  return (
    <main className="main-cont">
      <TabPanel value={value} index={0}>
        <Accord allData={data} sem="semester-1" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Accord allData={data} sem="semester-2" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Accord allData={data} sem="semester-3" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Accord allData={data} sem="semester-4" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Accord allData={data} sem="semester-5" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Accord allData={data} sem="semester-6" />
      </TabPanel>
    </main>
  );
};

export default Render;
