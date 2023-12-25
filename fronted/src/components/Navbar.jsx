import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={8} py={4}>
      <Flex align="center">
        <Heading as="h1" size="md" color="white">
          EMI CALUCALATION
        </Heading>
        <Spacer />
        <Box>
          <ChakraLink
            paddingRight={"60px"}
            as={Link}
            to="/login"
            color="white"
            mr={4}
          >
            Login
          </ChakraLink>
          <ChakraLink
            paddingRight={"60px"}
            as={Link}
            to="/"
            color="white"
            mr={4}
          >
            Signup
          </ChakraLink>
          <ChakraLink
            paddingRight={"60px"}
            as={Link}
            to="/profile"
            color="white"
            mr={4}
          >
            Profile
          </ChakraLink>
          <ChakraLink
            paddingRight={"60px"}
            as={Link}
            to="/emi"
            color="white"
            mr={4}
          >
            EMI Calculator
          </ChakraLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
