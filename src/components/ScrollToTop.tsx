import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position on navigation; without this, react-router keeps
// whatever scroll offset the previous page had.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
