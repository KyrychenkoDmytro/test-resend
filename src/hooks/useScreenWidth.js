'use client';

import { useState, useEffect } from "react";

const useScreenWidth = () => {
   const [screenWidth, setScreenWidth] = useState({
      mobile: false,
      tablet: false,
      desktop: false,
   });

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;

         setScreenWidth({
            mobile: width < 760,
            tablet: width >= 760 && width < 1440,
            desktop: width >= 1440,
         });
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return screenWidth;
};

export default useScreenWidth;