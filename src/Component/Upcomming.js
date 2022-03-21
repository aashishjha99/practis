import {
  Box,
  Container,
  Grid,
  Heading,
  Link,
  Image,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import React from "react";
import Events1 from "../Assests/events1.png";
import Events2 from "../Assests/events2.png";
import Events3 from "../Assests/events3.png";
import Events4 from "../Assests/events4.png";

function Upcomming() {
  return (
    <Box mt="20">
      <Container maxW="container.xl">
        <Box
          mb="7"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Heading alignItems="center " as="h3" size="lg">
              Upcoming Online Evenets
            </Heading>
          </Box>
          <Box>
            <Link fontWeight="semibold" size="" color="teal">
              Explore more events
            </Link>
          </Box>
        </Box>
        <Grid
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={8}
        >
          <Box width="100%" align="left">
            <Box position="relative">
              <Image position="relative" w="100%" src={Events1} alt="brand" />
              <Box
                position="absolute"
                d="flex"
                alignItems="center"
                borderRadius="5px"
                top="0"
                background="#ffffff"
                fontSize="sm"
                m="2"
                px="3"
                py="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-swarm-icons="true"
                  width="18"
                  height="18"
                  fill="#757575"
                  ml="4"
                  d="block"
                >
                  <path
                    d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 
                  20H14C15.1046 20 16 19.1046 16 18V15.1869C16 15.107 16.089 15.0593 
                  16.1555 15.1036L20.4453 17.9635C21.1099 18.4066 22 17.9302 22 17.1315V6.86852C22 6.06982 21.1099 
                  5.59343 20.4453 6.03647L16.1555 8.89635C16.089 8.94066 16 8.89302 16 8.81315V6C16 4.89543 15.1046 4 14 4H4Z"
                  ></path>
                </svg>
                <Box ml="2" color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Box>
            </Box>
            <Box mt="3" color="#877457" fontWeight="semibold">
              Sat, Aug 14 @ 09:45 PM NPT
            </Box>
            <Heading
              alignItems="center"
              as="h6"
              mt="1"
              fontWeight="black"
              size="sm"
            >
              Upcoming online events
            </Heading>
            <Box my="3" size="xs">
              Remote-Working Group
            </Box>
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Box d="flex" alignItems="center" gap={10}>
                <AvatarGroup size="sm" max={4}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>

                <Box ml={10}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    width="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10.8232 5.23741C10.9807 5.07992 11.25 5.19146 11.25 5.41419L11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75
                     14.25V5.41418C12.75 5.19146 13.0193 5.07992 13.1768 5.23741L15.9697 8.0303C16.2626 8.32319 16.7374 8.32319 17.0303 8.0303C17.3232 
                     7.73741 17.3232 7.26253 17.0303 6.96964L13.2374 3.17675C12.554 2.49333 11.446 2.49333 
                     10.7626 3.17675L6.96967 6.96964C6.67678 7.26253 6.67678 7.73741 6.96967 8.0303C7.26256 8.32319
                     7.73744 8.32319 8.03033 8.0303L10.8232 5.23741ZM9.25 10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H14.75V11.5H18C18.2761
                     11.5 18.5 11.7239 18.5 12V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V12C5.5 11.7239 5.72386 11.5 6 11.5H9.25V10Z"
                    ></path>
                  </svg>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width="100%" align="left">
            <Box position="relative">
              <Image position="relative" w="100%" src={Events2} alt="brand" />
              <Box
                position="absolute"
                d="flex"
                alignItems="center"
                borderRadius="5px"
                top="0"
                background="#ffffff"
                fontSize="sm"
                m="2"
                px="3"
                py="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-swarm-icons="true"
                  width="18"
                  height="18"
                  fill="#757575"
                  ml="4"
                  d="block"
                >
                  <path
                    d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 
                  20H14C15.1046 20 16 19.1046 16 18V15.1869C16 15.107 16.089 15.0593 
                  16.1555 15.1036L20.4453 17.9635C21.1099 18.4066 22 17.9302 22 17.1315V6.86852C22 6.06982 21.1099 
                  5.59343 20.4453 6.03647L16.1555 8.89635C16.089 8.94066 16 8.89302 16 8.81315V6C16 4.89543 15.1046 4 14 4H4Z"
                  ></path>
                </svg>
                <Box ml="2" color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Box>
            </Box>
            <Box mt="3" color="#877457" fontWeight="semibold">
              Sat, Aug 14 @ 09:45 PM NPT
            </Box>
            <Heading
              alignItems="center"
              as="h6"
              mt="1"
              fontWeight="black"
              size="sm"
            >
              Upcoming online events
            </Heading>
            <Box my="3" size="xs">
              Remote-Working Group
            </Box>
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Box d="flex" alignItems="center" gap={10}>
                <AvatarGroup size="sm" max={4}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>

                <Box ml={10}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    width="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10.8232 5.23741C10.9807 5.07992 11.25 5.19146 11.25 5.41419L11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75
                     14.25V5.41418C12.75 5.19146 13.0193 5.07992 13.1768 5.23741L15.9697 8.0303C16.2626 8.32319 16.7374 8.32319 17.0303 8.0303C17.3232 
                     7.73741 17.3232 7.26253 17.0303 6.96964L13.2374 3.17675C12.554 2.49333 11.446 2.49333 
                     10.7626 3.17675L6.96967 6.96964C6.67678 7.26253 6.67678 7.73741 6.96967 8.0303C7.26256 8.32319
                     7.73744 8.32319 8.03033 8.0303L10.8232 5.23741ZM9.25 10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H14.75V11.5H18C18.2761
                     11.5 18.5 11.7239 18.5 12V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V12C5.5 11.7239 5.72386 11.5 6 11.5H9.25V10Z"
                    ></path>
                  </svg>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width="100%" align="left">
            <Box position="relative">
              <Image position="relative" w="100%" src={Events3} alt="brand" />
              <Box
                position="absolute"
                d="flex"
                alignItems="center"
                borderRadius="5px"
                top="0"
                background="#ffffff"
                fontSize="sm"
                m="2"
                px="3"
                py="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-swarm-icons="true"
                  width="18"
                  height="18"
                  fill="#757575"
                  ml="4"
                  d="block"
                >
                  <path
                    d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 
                  20H14C15.1046 20 16 19.1046 16 18V15.1869C16 15.107 16.089 15.0593 
                  16.1555 15.1036L20.4453 17.9635C21.1099 18.4066 22 17.9302 22 17.1315V6.86852C22 6.06982 21.1099 
                  5.59343 20.4453 6.03647L16.1555 8.89635C16.089 8.94066 16 8.89302 16 8.81315V6C16 4.89543 15.1046 4 14 4H4Z"
                  ></path>
                </svg>
                <Box ml="2" color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Box>
            </Box>
            <Box mt="3" color="#877457" fontWeight="semibold">
              Sat, Aug 14 @ 09:45 PM NPT
            </Box>
            <Heading
              alignItems="center"
              as="h6"
              mt="1"
              fontWeight="black"
              size="sm"
            >
              Upcoming online events
            </Heading>
            <Box my="3" size="xs">
              Remote-Working Group
            </Box>
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Box d="flex" alignItems="center" gap={10}>
                <AvatarGroup size="sm" max={4}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>

                <Box ml={10}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    width="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10.8232 5.23741C10.9807 5.07992 11.25 5.19146 11.25 5.41419L11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75
                     14.25V5.41418C12.75 5.19146 13.0193 5.07992 13.1768 5.23741L15.9697 8.0303C16.2626 8.32319 16.7374 8.32319 17.0303 8.0303C17.3232 
                     7.73741 17.3232 7.26253 17.0303 6.96964L13.2374 3.17675C12.554 2.49333 11.446 2.49333 
                     10.7626 3.17675L6.96967 6.96964C6.67678 7.26253 6.67678 7.73741 6.96967 8.0303C7.26256 8.32319
                     7.73744 8.32319 8.03033 8.0303L10.8232 5.23741ZM9.25 10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H14.75V11.5H18C18.2761
                     11.5 18.5 11.7239 18.5 12V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V12C5.5 11.7239 5.72386 11.5 6 11.5H9.25V10Z"
                    ></path>
                  </svg>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width="100%" align="left">
            <Box position="relative">
              <Image position="relative" w="100%" src={Events4} alt="brand" />
              <Box
                position="absolute"
                d="flex"
                alignItems="center"
                borderRadius="5px"
                top="0"
                background="#ffffff"
                fontSize="sm"
                m="2"
                px="3"
                py="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-swarm-icons="true"
                  width="18"
                  height="18"
                  fill="#757575"
                  ml="4"
                  d="block"
                >
                  <path
                    d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 
                  20H14C15.1046 20 16 19.1046 16 18V15.1869C16 15.107 16.089 15.0593 
                  16.1555 15.1036L20.4453 17.9635C21.1099 18.4066 22 17.9302 22 17.1315V6.86852C22 6.06982 21.1099 
                  5.59343 20.4453 6.03647L16.1555 8.89635C16.089 8.94066 16 8.89302 16 8.81315V6C16 4.89543 15.1046 4 14 4H4Z"
                  ></path>
                </svg>
                <Box ml="2" color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Box>
            </Box>
            <Box mt="3" color="#877457" fontWeight="semibold">
              Sat, Aug 14 @ 09:45 PM NPT
            </Box>
            <Heading
              alignItems="center"
              as="h6"
              mt="1"
              fontWeight="black"
              size="sm"
            >
              Upcoming online events
            </Heading>
            <Box my="3" size="xs">
              Remote-Working Group
            </Box>
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Box d="flex" alignItems="center" gap={10}>
                <AvatarGroup size="sm" max={4}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>

                <Box ml={10}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    width="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10.8232 5.23741C10.9807 5.07992 11.25 5.19146 11.25 5.41419L11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75
                     14.25V5.41418C12.75 5.19146 13.0193 5.07992 13.1768 5.23741L15.9697 8.0303C16.2626 8.32319 16.7374 8.32319 17.0303 8.0303C17.3232 
                     7.73741 17.3232 7.26253 17.0303 6.96964L13.2374 3.17675C12.554 2.49333 11.446 2.49333 
                     10.7626 3.17675L6.96967 6.96964C6.67678 7.26253 6.67678 7.73741 6.96967 8.0303C7.26256 8.32319
                     7.73744 8.32319 8.03033 8.0303L10.8232 5.23741ZM9.25 10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H14.75V11.5H18C18.2761
                     11.5 18.5 11.7239 18.5 12V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V12C5.5 11.7239 5.72386 11.5 6 11.5H9.25V10Z"
                    ></path>
                  </svg>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Upcomming;
