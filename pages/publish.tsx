import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout";
import Publish from "../src/components/Publish";
import Page from "@shared/Page";
import content from "../content/publish/index.json";
import router from "next/router";

// import React, { ReactElement } from "react";
// import Publish from "../../components/Publish";
// import Page from "@shared/Page";
// import content from "../../../content/publish/index.json";
// import router from "next/router";

export default function PublishPage(): ReactElement {
  const { title, description } = content;

  return (
    <Page
      title={title}
      description={description}
      uri={router.route}
      noPageHeader
    >
      <Publish content={content} />
    </Page>
  );
  // return (
  //   <Layout title="Publish">
  //     <Publish />
  //   </Layout>
  // );
}
