import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import DatasetSection from "../components/landing/DatasetList";
import Header from "../components/landing/Header";
import SearchSection from "../components/landing/SearchSection";
import Layout from "../components/Layout";
import Search from "../src/components/Search";

const Home: NextPage = () => {
  const [totalResults, setTotalResults] = useState<number>();
  const [totalPagesNumber, setTotalPagesNumber] = useState<number>();
  return (
    <Layout title="Home">
      {/* centers the grid on the page */}
      <Center>
        {/* grid container that defines the layout */}
        <Grid
          templateColumns={{ base: "1fr", landing1: "auto auto 3fr" }}
          columnGap={10}
          gap={4}
          maxW="100%"
          w={{ base: "97%", landing1: "85%" }}
        >
          <GridItem colSpan={3}>
            <Header />
          </GridItem>
          <GridItem
            justifySelf={{ base: "start", landing1: "center" }}
            gridColumn={1}
          >
            <SearchSection />
          </GridItem>
          {/* white line between the two containers on md+ devices */}
          <GridItem
            display={{ base: "none", landing1: "block" }}
            gridColumn={2}
            mt={8}
          >
            <Box w="2px" h="100%" bg="white" />
          </GridItem>
          <GridItem
            display="block"
            gridColumn={{ base: 1, landing1: 3 }}
            w="100%"
          >
            <DatasetSection />
            {/* <Search
              setTotalResults={setTotalResults}
              setTotalPagesNumber={setTotalPagesNumber}
            /> */}
          </GridItem>
        </Grid>
      </Center>
    </Layout>
  );
};

export default Home;
