import {
  Box,
  Container,
  Grid,
  Heading,
  Link,
  Image,
  Button,
} from "@chakra-ui/react";
import joinGrp from "../Assests/joinGroup.svg";
import ticket from "../Assests/ticket.svg";
import handsUp from "../Assests/handsUp.svg";
import React from "react";

function itworks() {
  return (
    <>
      <Box>
        <Container maxW="container.xl" my="20">
          <Heading align="center" as="h3" size="lg" pb="2">
            How Meetup works{" "}
          </Heading>
          <Box align="center" maxW="700px" mx="auto" pb="10">
            Meet new people who shares your interest through online and
            in-person events.It's free to create an account
          </Box>
          <Grid templateColumns="repeat(3,1fr)" gap="6">
            <Box mx="auto" align="center">
              <Image w="100%" boxSize="160px" src={handsUp} alt="brand" />

              <Heading as="h5" size="md">
                <Link>
                  <Box color="blue.600" pb={4}>
                    <Link>Join a group</Link>
                  </Box>
                </Link>
              </Heading>
              <Box fontSize="small">
                Do What you love, meet others who love it, Find your community.
                The rest is history!
              </Box>
            </Box>
            <Box mx="auto" align="center">
              <Image w="100%" boxSize="160px" src={ticket} alt="brand" />

              <Heading as="h5" size="md">
                <Link>
                  <Box color="blue.600" pb={4}>
                    <Link>Find an event</Link>
                  </Box>
                </Link>
              </Heading>
              <Box fontSize="small">
                Events are happening on just about any topic you can think of,
                from online gaming and photography to yoga and hiking.
              </Box>
            </Box>
            <Box mx="auto" align="center">
              <Image w="100%" boxSize="160px" src={joinGrp} alt="brand" />

              <Heading as="h5" size="md">
                <Link>
                  <Box color="blue.600" pb={4}>
                    <Link>Start a group</Link>
                  </Box>
                </Link>
              </Heading>
              <Box fontSize="small">
                You don’t have to be an expert to gather people together and
                explore shared interests.
              </Box>
            </Box>
          </Grid>
          <Box>
            <Box align="center " mt="16">
              <Button
                _hover={{ opacity: "0.8" }}
                bg="blue.600"
                color="#ffffff"
                fontWeight="normal"
                size="md"
              >
                {" "}
                Join Meetup
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default itworks;
