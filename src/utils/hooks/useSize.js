import { useState, useMemo, useLayoutEffect } from "react";

const useMediaQuery = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // const [mediaQuery, setMediaQuery] = useState({...size});
  const screen = useMemo(() => {
    if (size.width >= 1200) {
      return "xl";
    } else if (size.width >= 992) {
      return "lg";
    } else if (size.width >= 768) {
      return "md";
    } else if (size.width <= 767) {
      return "sm";
    } else {
      throw EvalError("Screen size cannot be detected");
    }
  }, [size]);
  
  useLayoutEffect(() => {
    function updateSize() {
      setSize({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return {
    ...size,
    screen
  };
  // return mediaQuery
};

export default useMediaQuery;
