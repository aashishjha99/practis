import {
  Box,
  Grid,
  Container,
  Image,
  Heading,
  Divider,
  Link,
} from "@chakra-ui/react";
import popular from "../Assests/popular.jpg";
import party from "../Assests/party.jpg";
import jungle from "../Assests/jungle.jpg";
import React from "react";

function Popular() {
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
            <Heading fontWeight="black" alignItems="center" as="h3" size="lg">
              Popular groups
            </Heading>
          </Box>
          <Box>
            <Link fontWeight="semibold" color="teal">
              Explore more groups
            </Link>
          </Box>
        </Box>
        <Grid templateColumns="repeat(3,1fr)" gap={4}>
          <Box
            border="1px"
            borderColor="gray.600"
            p="15px"
            width="100%"
            align="left"
          >
            <Box d="flex" alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={popular}
                alt="brand"
                mr="15px"
              />
              <Heading alignItems="center" as="h6" fontWeight="bold" size="md">
                Aurora Southlands Parker Womans's Social Group
              </Heading>
            </Box>
            <Divider my="3" mb="2" />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Mon, Aug 16 @ 10:45 Pm NPT
            </Box>
            <Box fontWeight="bold" color="#212121">
              Spring Clean-up East River Esplanade
            </Box>
          </Box>
          <Box
            border="1px"
            borderColor="gray.600"
            p="15px"
            width="100%"
            align="left"
          >
            <Box d="flex" alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={party}
                alt="brand"
                mr="15px"
              />
              <Heading alignItems="center" as="h6" fontWeight="black" size="md">
                Aurora Southlands Parker Womans's Social Group
              </Heading>
            </Box>
            <Divider my="3" mb="2" />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Mon, Aug 16 @ 10:45 Pm NPT
            </Box>
            <Box fontWeight="bold" color="#212121">
              Spring Clean-up East River Esplanade
            </Box>
          </Box>
          <Box
            border="1px"
            borderColor="gray.600"
            p="15px"
            width="100%"
            align="left"
          >
            <Box d="flex" alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={jungle}
                alt="brand"
                mr="15px"
              />
              <Heading alignItems="center" as="h6" fontWeight="black" size="md">
                Aurora Southlands Parker Womans's Social Group
              </Heading>
            </Box>
            <Divider my="3" mb="2" />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Mon, Aug 16 @ 10:45 Pm NPT
            </Box>
            <Box fontWeight="bold" color="#212121">
              Spring Clean-up East River Esplanade
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Popular;
