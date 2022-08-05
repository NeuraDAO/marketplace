import { Center, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/landing/Header";
import SearchSection from "../components/landing/SearchSection";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      {/* centers the grid on the page */}
      <Center>
        {/* grid container that defines the layout */}
        <Grid templateColumns="1fr 3fr" maxW="100%" w="85%">
          <GridItem colSpan={2}>
            <Header />
          </GridItem>
          <GridItem gridColumn={1}>
            <SearchSection />
          </GridItem>
        </Grid>
      </Center>
    </Layout>
  );
};

export default Home;
