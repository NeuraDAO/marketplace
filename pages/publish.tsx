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

  const { user } = useUser();

  function setValue(value, name) {
    setValues({ ...values, [name]: value });
  }

  function getValue(name) {
    return values[name] || "";
  }

  const uploadMetadata = async () => {
    const supabase = getSupabase();
    if (!values || !user) return;
    // TODO: note this should be removed as soon as possible since it can expose a security vunerability
    const resp = await supabase
      .from("metadata")
      .insert({ owner: user.sub, ...values });
    console.log({ resp });

    setValues({});
  };

  return (
    <Layout title="Publish">
      {/* centers the grid on the page */}
      <Center>
        <Grid>
          <TextInput
            name="language"
            value={getValue("language")}
            setValue={(val) => setValue(val, "language")}
          />
          <TextInput
            name="version"
            value={getValue("version")}
            setValue={(val) => setValue(val, "version")}
          />
          <TextInput
            name="description"
            value={getValue("description")}
            setValue={(val) => setValue(val, "description")}
          />
          <TextInput
            name="name"
            value={getValue("name")}
            setValue={(val) => setValue(val, "name")}
          />
          <TextInput
            name="type"
            value={getValue("type")}
            setValue={(val) => setValue(val, "type")}
          />
          <TextInput
            name="author"
            value={getValue("author")}
            setValue={(val) => setValue(val, "author")}
          />
          <TextInput
            name="license"
            value={getValue("license")}
            setValue={(val) => setValue(val, "license")}
          />
          <TextInput
            name="links"
            value={getValue("links")}
            setValue={(val) => setValue(val, "links")}
          />
          <TextInput
            name="tags"
            value={getValue("tags")}
            setValue={(val) => setValue(val, "tags")}
          />
          <TextInput
            name="modalities"
            value={getValue("modalities")}
            setValue={(val) => setValue(val, "modalities")}
          />
          <TextInput
            name="tasks"
            value={getValue("tasks")}
            setValue={(val) => setValue(val, "tasks")}
          />
          <TextInput
            name="size"
            value={getValue("size")}
            setValue={(val) => setValue(val, "size")}
          />
          <TextInput
            name="files"
            value={getValue("files")}
            setValue={(val) => setValue(val, "files")}
          />
          <TextInput
            name="sessions"
            value={getValue("sessions")}
            setValue={(val) => setValue(val, "sessions")}
          />
          <TextInput
            name="participants"
            value={getValue("participants")}
            setValue={(val) => setValue(val, "participants")}
          />
          <TextInput
            name="participantsAge"
            value={getValue("participantsAge")}
            setValue={(val) => setValue(val, "participantsAge")}
          />
          <TextInput
            name="categories"
            value={getValue("categories")}
            setValue={(val) => setValue(val, "categories")}
          />
          <TextInput
            name="copyrightHolder"
            value={getValue("copyrightHolder")}
            setValue={(val) => setValue(val, "copyrightHolder")}
          />
          <TextInput
            name="contentLanguage"
            value={getValue("contentLanguage")}
            setValue={(val) => setValue(val, "contentLanguage")}
          />
          <TextInput
            name="algorithm"
            value={getValue("algorithm")}
            setValue={(val) => setValue(val, "algorithm")}
          />
          <TextInput
            name="additionalInformation"
            value={getValue("additionalInformation")}
            setValue={(val) => setValue(val, "additionalInformation")}
          />
          <Button onClick={uploadMetadata}>Submit</Button>
        </Grid>
      </Center>
    </Layout>
  );
};

export default Publish;
