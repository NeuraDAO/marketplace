import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";

import DatasetSection from "../components/landing/DatasetList";
import Header from "../components/landing/Header";
import SearchSection from "../components/landing/SearchSection";
import Layout from "../components/Layout";

import { getSupabase } from "../utils/supabase";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// TODO: add pagination
export const getServerSideProps = async () => {
  const supabase = getSupabase();

  const { data: datasets } = await supabase.from("metadata").select("*");

  return {
    props: { datasets },
  };
};

const Home: NextPage = ({ datasets }) => {
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
            <DatasetSection datasets={datasets} />
          </GridItem>
        </Grid>
      </Center>
    </Layout>
  );
};

export default Home;
