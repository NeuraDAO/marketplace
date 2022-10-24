import { getSupabase } from "../utils/supabase";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Grid,
  Center,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../components/Layout";

export const getServerSideProps = withPageAuthRequired();

function TextInput({
  name,
  value,
  setValue,
}: {
  name: string;
  value: string;
  setValue: Function;
}) {
  const isError = value === "";

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>{name}</FormLabel>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {!isError ? (
        <FormHelperText>Enter the value for {name}</FormHelperText>
      ) : (
        <FormErrorMessage>{name} is required.</FormErrorMessage>
      )}
    </FormControl>
  );
}

const Publish = () => {
  const [values, setValues] = useState({});

  function setValue(name, value) {
    setValues({ ...values, [name]: value });
  }

  function getValue(name) {
    return values[name] || "";
  }

  return (
    <Layout title="Publish">
      {/* centers the grid on the page */}
      <Center>
        <Grid>
          <TextInput
            name="owner"
            value={getValue("owner")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="language"
            value={getValue("language")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="version"
            value={getValue("version")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="description"
            value={getValue("description")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="name"
            value={getValue("name")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="type"
            value={getValue("type")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="author"
            value={getValue("author")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="license"
            value={getValue("license")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="links"
            value={getValue("links")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="tags"
            value={getValue("tags")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="modalities"
            value={getValue("modalities")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="tasks"
            value={getValue("tasks")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="size"
            value={getValue("size")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="files"
            value={getValue("files")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="sessions"
            value={getValue("sessions")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="participants"
            value={getValue("participants")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="participantsAge"
            value={getValue("participantsAge")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="categories"
            value={getValue("categories")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="copyrightHolder"
            value={getValue("copyrightHolder")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="contentLanguage"
            value={getValue("contentLanguage")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="algorithm"
            value={getValue("algorithm")}
            setValue={(val) => setValue(val, name)}
          />
          <TextInput
            name="additionalInformation"
            value={getValue("additionalInformation")}
            setValue={(val) => setValue(val, name)}
          />
          <Button onClick={() => console.log(values)}>Submit</Button>
        </Grid>
      </Center>
    </Layout>
  );
};

export default Publish;
