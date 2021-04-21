import useFetch from "../useFetch";
import Accord from "../components/Accord";
import TabPanel from "../components/TabPanel";

const Bca = ({ value }) => {
  const { data } = useFetch("./pdf.json");
  return (
    <main className="main-cont">
      <TabPanel value={value} index={0}>
        {data && <Accord allData={data.bca} sem="semester-1" />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {data && <Accord allData={data.bca} sem="semester-2" />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {data && <Accord allData={data.bca} sem="semester-3" />}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {data && <Accord allData={data.bca} sem="semester-4" />}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {data && <Accord allData={data.bca} sem="semester-5" />}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {data && <Accord allData={data.bca} sem="semester-6" />}
      </TabPanel>
    </main>
  );
};

export default Bca;
