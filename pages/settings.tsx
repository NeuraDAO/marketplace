import { getSupabase } from "../utils/supabase";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Grid,
  Center,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../components/Layout";

export const getServerSideProps = withPageAuthRequired();

const Publish = () => {
  const handleAddPM = () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({ userId: user.sub }),
    };

    fetch("http://localhost:3000/api/addPM", requestOptions)
      .then((response) => response.json())
      .then((result) => window.open(result?.accountLink?.url))
      .catch((error) => console.log("error", error));
  };

  const { user } = useUser();

  return (
    user && (
      <Layout title="Publish">
        {/* centers the grid on the page */}
        <Center>
          <Text>Hi</Text>
          <Button onClick={handleAddPM}>Add Payment Method</Button>
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </Center>
      </Layout>
    )
  );
};

export default Publish;
