import { useState, useEffect } from "react";

const useIsOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const handleOffline = () => {
      setOnlineStatus(false);
    };
    const handleOnline = () => {
      setOnlineStatus(true);
    };
    const handleOnlineOnLoad = () => {
      navigator.onLine ? setOnlineStatus(true) : setOnlineStatus(false);
    };
    window.addEventListener("load", handleOnlineOnLoad);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("load", handleOnlineOnLoad);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  return onlineStatus;
};

export default useIsOnline;
