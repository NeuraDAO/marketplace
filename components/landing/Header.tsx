import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Header = () => (
  <Flex
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    w="100%"
    maxW="100%"
    pt={6}
  >
    <Heading textAlign="center">NeuraDAO Market</Heading>
    <Text maxW={325} textAlign="center" fontWeight="300">
      Some cool text about all the cool stuff we are about to do u know?
    </Text>
    <Box mt={4} w="100%" h="2px" bg="white" />
  </Flex>
);

export default Header;
