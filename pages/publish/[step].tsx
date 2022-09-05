import React, { ReactElement } from "react";
import Publish from "../../src/components/Publish";
import Page from "@shared/Page";
import content from "../../content/publish/index.json";
import router from "next/router";
import Layout from "../../components/Layout";

export default function PagePublish(): ReactElement {
  const { title, description } = content;

  return (
    <Layout title="Publish">
      <Page
        title={title}
        description={description}
        uri={router.route}
        noPageHeader
      >
        <Publish content={content} />
      </Page>
    </Layout>
  );
}
