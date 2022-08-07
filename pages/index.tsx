import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import DatasetSection from "../components/landing/DatasetList";
import Header from "../components/landing/Header";
import SearchSection from "../components/landing/SearchSection";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      {/* centers the grid on the page */}
      <Center>
        {/* grid container that defines the layout */}
        <Grid
          templateColumns="auto auto 3fr"
          columnGap={10}
          gap={4}
          maxW="100%"
          w="85%"
        >
          <GridItem colSpan={3}>
            <Header />
          </GridItem>
          <GridItem justifySelf="center" gridColumn={1}>
            <SearchSection />
          </GridItem>
          {/* white line between the two containers on md+ devices */}
          <GridItem gridColumn={2} mt={8}>
            <Box w="2px" h="100%" bg="white" />
          </GridItem>
          <GridItem display="block" gridColumn={3} w="100%">
            <DatasetSection />
          </GridItem>
        </Grid>
      </Center>
    </Layout>
  );
};

export default Home;
