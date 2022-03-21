import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Banner from "./Component/Banner";
import Connected from "./Component/Connected";
import Footerbottom from "./Component/Footerbottom";
import Itworks from "./Component/Itworks";
import Popular from "./Component/Popular";
import Stories from "./Component/Stories";
import Upcomming from "./Component/Upcomming";
import bg from "./Assests/bg.svg";

export default function () {
  return (
    <>
      <Box position="absolute" left="0" top="0" right="0">
        <Banner />
        <Itworks />
        <Upcomming />
        <Popular />
        <Connected />
        <Stories />
        <Footerbottom />
      </Box>
      <Box
        position="relative"
        top="0"
        bottom="0"
        right="0"
        left="0"
        height="100vh"
        zIndex={-2}
      >
        <Image w="80%" m="auto" objectFit="cover" sizes="300" src={bg} />
      </Box>
    </>
  );
}
