import { Box, Container, Heading, Image } from "@chakra-ui/react";
import leftMobile from "../Assests/leftmobile.png";
import meetupLogo from "../Assests/meetup-logo.svg";
import appleStore from "../Assests/appleStore.svg";
import google_play from "../Assests/google_play.svg";
import rightmobile from "../Assests/rightmobile.png";
import React from "react";

function Connected() {
  return (
    <>
      <Box my="40">
        <Container maxW="container.xl">
          <Box
            display="flex"
            position="relative"
            justify-content="space-evenly"
            alignItems="center"
          >
            <Box
              display={{
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
                base: "none",
              }}
            >
              <Image w="260px" src={leftMobile} />
            </Box>
            <Box position="relative" mx="auto" align="center">
              <Image w="80px" left="0" src={meetupLogo} />
              <Heading as="h6" size="md" my="7">
                Stay Connected.
                <br /> Download the app.
              </Heading>
              <Box d="flex">
                <Image w="180px" p="5" src={appleStore}></Image>
                <Image w="180px" p="5" src={google_play}></Image>
              </Box>
            </Box>
            <Box
              display={{
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
                base: "none",
              }}
            >
              <Image w="260px" src={rightmobile} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Connected;
