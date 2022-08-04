import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        maxW="100%"
        pt={6}
        pb={4}
        borderBottomColor="white"
        borderBottomWidth={1}
      >
        <Heading textAlign="center">NeuraDAO Market</Heading>
        <Text maxW={325} textAlign="center" fontWeight="300">
          Some cool text about all the cool stuff we are about to do u know?
        </Text>
      </Flex>
    </Layout>
  );
};

export default Home;
