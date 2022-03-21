import { Box, Container, Heading, Image, Grid, Link } from "@chakra-ui/react";
import story1 from "../Assests/story-one.jpg";
import story2 from "../Assests/story-two.jpg";
import story3 from "../Assests/story-three.jpg";
import React from "react";

export default function Stories() {
  return (
    <Box mt="10">
      <Container maxW="container.xl">
        <Box
          mb="7"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box align="center" w="100%">
            <Heading alignItems="center" as="h3" size="lg" pb="2">
              Stories from Meetup
            </Heading>
            <Box maxW="700px">
              People on Meetup have fostered community, learned new skills,
              started businesses, and made life-long friends. Learn how.
            </Box>
          </Box>
        </Box>
        <Grid
          mt="10"
          mb="40"
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={6}
        >
          <Box width="100%" align="left">
            <Link>
              <Image
                position="relative"
                src={story1}
                _hover={{ opacity: "0.9" }}
                alt="brand"
                nr="15px"
                width="100%"
              />
              <Box d="flex" flexDirection="column">
                <Heading
                  alignItems="center"
                  as="h6"
                  fontWeight="black"
                  size="md"
                  pt="4"
                  pb="4"
                >
                  Three Ways To Make Coworker Friendship While Working From Home
                </Heading>
              </Box>
            </Link>
            <Box>
              Work friendships don’t need to fade just because you’re working
              remotely. Here are three fun ways you can get to know your
              colleagues.
            </Box>
          </Box>
          <Box width="100%" align="left">
            <Link>
              <Image
                position="relative"
                src={story2}
                _hover={{ opacity: "0.9" }}
                alt="brand"
                nr="15px"
                width="100%"
              />
              <Box d="flex" flexDirection="column">
                <Heading
                  alignItems="center"
                  as="h6"
                  fontWeight="black"
                  size="md"
                  pt="4"
                  pb="4"
                >
                  Five Ways to feel More Connected
                </Heading>
              </Box>
            </Link>
            <Box>
              Since Meetup began nearly 20 years ago, we’ve fostered connections
              between more than 50 million people in 190 countries worldwide.
              Here are five simple strategies to help you feel more connected
              and improve your wellbeing.
            </Box>
          </Box>
          <Box width="100%" align="left">
            <Link>
              <Image
                position="relative"
                src={story3}
                _hover={{ opacity: "0.9" }}
                alt="brand"
                nr="15px"
                width="100%"
              />
              <Box d="flex" flexDirection="column">
                <Heading
                  alignItems="center"
                  as="h6"
                  fontWeight="black"
                  size="md"
                  pt="4"
                  pb="4"
                >
                  How To Live Your Best Social Life
                </Heading>
              </Box>
            </Link>
            <Box>
              Social interaction is a key part of any healthy lifestyle.
              Discover all different kinds of events that’ll help you maintain a
              fun and fulfilling social life.
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
