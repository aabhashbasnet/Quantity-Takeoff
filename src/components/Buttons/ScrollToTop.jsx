// ScrollToTop.jsx
import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null; // It doesn't render anything
};

export default ScrollToTop;
