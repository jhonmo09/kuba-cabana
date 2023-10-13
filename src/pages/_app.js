import "@/styles/globals.css";
import { useEffect } from "react";
import { getAnalytics } from "../firebaseConfig";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const analytics = getAnalytics();
    if (analytics) {
      analytics.logEvent("page_view");
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;


