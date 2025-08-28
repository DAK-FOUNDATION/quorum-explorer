import { Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

const DakIcon = () => {
  const { colorMode } = useColorMode();
  const lightMode = "gray.800";
  const darkMode = "white";
  const colorFill = useColorModeValue(lightMode, darkMode);

  return (
    <Icon height="50px" width="50px" viewBox="0 0 500 500">
      <svg xmlns="http://www.w3.org/2000/svg" version="1">
        <path
          fill={colorFill}
          d="M0 250v250h500V0H0zM273.1 88c13.7 2.4 29.5 7.2 29.1 8.8-.2 1-52.8 76-93.7 133.7-5.1 7.1-9.8 14-10.6 15.2-.8 1.3-1.6 2.3-1.9 2.3s-2.3-2.6-4.4-5.8c-2.2-3.1-9.9-14.3-17.1-24.7-7.3-10.5-24.1-34.8-37.5-54-13.4-19.3-30.7-44.3-38.6-55.6C90.5 96.5 84 86.9 84 86.6s40-.6 88.9-.6c84.1 0 89.4.1 100.2 2m53.6 17.7c25.8 13.2 47.1 31.9 62.3 54.7 42.9 64 35.9 148.3-16.8 203.8-23.8 25-52.6 41-85.9 47.7-9.8 2-13.2 2.1-101.7 2.1-50.4 0-91.6-.3-91.6-.6 0-.9 103-149.6 140.9-203.4 37.3-53 58.5-83.2 66.1-94 12.7-18.2 11.6-17 15-15.9 1.6.6 6.9 3.1 11.7 5.6"
        ></path>
      </svg>
    </Icon>
  );
};

export default DakIcon;
