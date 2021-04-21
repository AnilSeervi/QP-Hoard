import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const handleData = async (url) => {
    const res = await fetch(url);
    const value = await res.json();
    return value;
  };
  useEffect(() => {
    handleData(url).then((val) => setData(val));
  }, [url]);
  return { data };
};

export default useFetch;
