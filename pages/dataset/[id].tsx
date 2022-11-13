import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { getSupabase } from "../../utils/supabase";

const DatasetPage = ({ dataset }) => {
  if (!dataset) {
    return (
      <Layout title="Not Found">
        <div>Dataset not found</div>
      </Layout>
    );
  }

  const { user } = useUser();

  return (
    <Layout title="Not Found">
      <div>{JSON.stringify(dataset)}</div>
      <Button disabled={!user}>Purchase ${dataset.priceUSD} USD</Button>
    </Layout>
  );
};

export default DatasetPage;

export const getServerSideProps = async ({ params }) => {
  const supabase = getSupabase();

  const { data: dataset } = await supabase
    .from("metadata")
    .select("*")
    .eq("id", params.id)
    .single();

  return {
    props: { dataset },
  };
};
