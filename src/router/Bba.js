import Accord from "../components/Accord";
import TabPanel from "../components/TabPanel";
import useFetch from "../useFetch";

const Bba = ({ value }) => {
  const { data } = useFetch("./pdf.json");
  return (
    <main className="main-cont">
      <p>Coming Soon</p>
      <TabPanel value={value} index={0}>
        {data && <Accord allData={data.bba} sem="semester-1" />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {data && <Accord allData={data.bba} sem="semester-2" />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {data && <Accord allData={data.bba} sem="semester-3" />}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {data && <Accord allData={data.bba} sem="semester-4" />}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {data && <Accord allData={data.bba} sem="semester-5" />}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {data && <Accord allData={data.bba} sem="semester-6" />}
      </TabPanel>
    </main>
  );
};

export default Bba;
