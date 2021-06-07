import { useEffect, useState } from "react";

const useIsInstalled = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const handlePrompt = (e) => {
    setDeferredPrompt(e);
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  };

  const handleInstalled = () => {
    // Clear the deferredPrompt so it can be garbage collected
    setDeferredPrompt(null);
    // Optionally, send analytics event to indicate successful install
    console.log("PWA was installed");
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handlePrompt);
    window.addEventListener("appinstalled", handleInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", handlePrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  return { deferredPrompt };
};

export default useIsInstalled;
