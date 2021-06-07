import { useEffect, useState } from "react";
const useFetch = () => {
  const [data, setData] = useState(null);
  const handleData = async () => {
    const res = await fetch("./pdf.json");
    const value = await res.json();
    return value;
  };
  useEffect(() => {
    handleData().then((val) => setData(val));
  }, []);
  return { data };
};

export default useFetch;
