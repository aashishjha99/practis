import {
  Box,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Badge,
  FormControl,
  Input,
} from "@chakra-ui/react";
import Brandlogo from "../Assests/logo.svg";
import Illustration from "../Assests/online_events.svg";
import Cat_1 from "../Assests/category1.png";
import Cat_2 from "../Assests/category2.png";
import Cat_3 from "../Assests/category3.png";
import rightArrow from "../Assests/right-arrow.svg";
import React from "react";

export default function Banner() {
  return (
    <>
      <header>
        <Box
          d="flex"
          alignitems="centre"
          justifyContent="space-between"
          ml={6}
          mr={6}
        >
          <Box>
            {" "}
            <Image boxSize="90px" src={Brandlogo} alt="logo" />
          </Box>

          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
              Log in
            </Button>
            <Button colorScheme="gray.600" fontSize="sm" variant="link">
              Sign up
            </Button>
          </Box>
        </Box>
      </header>
      {/* main punch line */}
      <Box>
        <Container maxWidth="container.xl">
          <Box d="flex" alignItems="center" flexDirection="row" py="20">
            <Box mr="9">
              <Heading as="h1" size="2xl">
                <Box fontWeight="Black">
                  Celebrating 20 years of real connections on Meetup
                </Box>
              </Heading>
              <Box mt="6" fontWeight="medium">
                Whatever you’re looking to do this year, Meetup can help. For 20
                years, people have turned to Meetup to meet people, make
                friends, find support, grow a business, and explore their
                interests. Thousands of events are happening every day—join the
                fun.
              </Box>
            </Box>
            <Box w="100%">
              <Image w="100" src={Illustration} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* three boxes */}

      <Container maxW="container.xl" mt="10">
        <Grid templateColumns="repeat(3,1fr)">
          <Box>
            <Image w="100%" mr="2" borderRadius="lg" src={Cat_1} />
            <Button colorScheme="teal" variant="link" mt="5">
              Explore the outdoor
              <Image w="100%" ml="2" src={rightArrow} alt="right arrow" />
            </Button>
          </Box>
          <Box>
            <Image w="100%" ml="3" borderRadius="lg" src={Cat_2} />
            <Button colorScheme="teal" variant="link" mt="5">
              Explore the outdoor
              <Image w="100%" ml="2" src={rightArrow} alt="right arrow" />
            </Button>
          </Box>
          <Box>
            <Image w="100%" ml="6" borderRadius="lg" src={Cat_3} />
            <Button colorScheme="teal" variant="link" mt="5">
              Explore the outdoor
              <Image w="100%" ml="2" src={rightArrow} alt="right arrow" />
            </Button>
          </Box>
        </Grid>
      </Container>

      {/* pills */}

      <Container maxW="container.xl">
        <Box
          direction="row"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          my="10"
        >
          <Badge
            borderRadius="3xl"
            px="4"
            py="2"
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="teal"
          >
            Boost Your Career
          </Badge>
          <Badge
            borderRadius="3xl"
            px="4"
            py="2"
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="teal"
          >
            Find Your Zen
          </Badge>
          <Badge
            borderRadius="3xl"
            px="4"
            py="2"
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="teal"
          >
            Get Moving
          </Badge>
          <Badge
            borderRadius="3xl"
            px="4"
            py="2"
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="teal"
          >
            Share Language + Culture
          </Badge>
          <Badge
            borderRadius="3xl"
            px="4"
            py="2"
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="teal"
          >
            Read With Friends
          </Badge>
          <Badge
            borderRadius="3xl"
            px="4"
            py="2"
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="teal"
          >
            Write Together
          </Badge>
          <Badge
            borderRadius="3xl"
            px="4"
            py="2"
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="teal"
          >
            Hone Your Craft
          </Badge>
        </Box>
      </Container>

      {/* last header section */}

      <Container maxW="container.xl" mt="20">
        <Grid templateColumns="repeat(2,1fr)" gap={8}>
          <Box>
            <Heading as="h3" size="lg" mb="7">
              What You Want To Do ?
            </Heading>
            <Box d="flex" alignItems="center" flexDirection="row" w="100%">
              <Box flexBasis="50%" w="100%" mr="2">
                <FormControl>
                  <Box pos="relative">
                    <Input
                      pl={"8"}
                      placeholder="search for tennis"
                      type="text"
                      w="100%"
                    ></Input>
                    <Box pos="absolute" top="3" left="2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 20 20"
                        fill="#c0c0c0"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.5 10.5C16.5 13.8137 13.8137 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5ZM18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5ZM16.4697 17.5303L15.9568 17.0174C16.3407 16.6957 16.6957 16.3407 17.0174 15.9568L17.5303 16.4697L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L16.4697 17.5303Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
              <Box flexBasis="50%" w="100%" mr="2">
                <FormControl>
                  <Box pos="relative">
                    <Input
                      pl={"8"}
                      placeholder="search for tennis"
                      type="text"
                      w="100%"
                    ></Input>
                    <Box pos="absolute" top="3" left="2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 20 20"
                        fill="#c0c0c0"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.015 21.3588C17.4032 18.4382 20 14.6519 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.6519 6.59679 18.4382 10.985 21.3588C11.5999
                           21.7681 12.4001 21.7681 13.015 21.3588ZM12 13C13.6569 13 15 11.6569 
                           15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
            </Box>
            <Button
              _hover={{ opacity: "0.8" }}
              mt="5"
              pt="6"
              pb="6"
              w="100%"
              color="#ffffff"
              bg="red.600"
              fontSize="lg"
            >
              <Box fontWeight="black">Search</Box>
            </Button>
          </Box>
          <Box>
            <Box>
              <Heading
                display={{
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                  base: "none",
                }}
                as="h3"
                size="lg"
                mb="7"
              >
                What is happening ?
              </Heading>
              <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                <Badge
                  borderRadius="3xl"
                  px="5"
                  py="2"
                  mr="4"
                  mb="4"
                  textTransform="normal"
                  color="#ffffff"
                  bg="teal"
                >
                  Starting Soon
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px="5"
                  py="2"
                  mr="4"
                  mb="4"
                  textTransform="normal"
                  color="#ffffff"
                  bg="teal"
                >
                  Today
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px="5"
                  py="2"
                  mr="4"
                  mb="4"
                  textTransform="normal"
                  color="#ffffff"
                  bg="teal"
                >
                  Tommorow
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px="5"
                  py="2"
                  mr="4"
                  mb="4"
                  textTransform="normal"
                  color="#ffffff"
                  bg="teal"
                >
                  This Week
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px="5"
                  py="2"
                  mr="4"
                  mb="4"
                  textTransform="normal"
                  color="#ffffff"
                  bg="teal"
                >
                  Online
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px="5"
                  py="2"
                  mr="4"
                  mb="4"
                  textTransform="normal"
                  color="#ffffff"
                  bg="teal"
                >
                  In person
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px="4"
                  py="2"
                  mr="4"
                  mb="4"
                  textTransform="normal"
                  color="#ffffff"
                  bg="teal"
                >
                  Trending near you
                </Badge>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
