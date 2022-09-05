import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import EditPage from "components/Asset/Edit";
import AssetProvider from "@context/Asset";

import Layout from "../../../components/Layout";

export default function PageEditAsset(): ReactElement {
  const router = useRouter();
  const { did } = router.query;
  return (
    <Layout title="Edit Asset">
      <AssetProvider did={did as string}>
        <EditPage uri={router.pathname} />
      </AssetProvider>
    </Layout>
  );
}
