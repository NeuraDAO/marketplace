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
  Container,
  Box,
  Select,
  Heading,
  HStack,
  Tag,
  TagCloseButton,
} from "@chakra-ui/react";
import { useState, useCallback, SyntheticEvent } from "react";
import Layout from "../components/Layout";
import ChakraTagInput from "../components/ChakraTagInput";

export const getServerSideProps = withPageAuthRequired();

function TextInput({
  name,
  value,
  setValue,
  helperText="Please input the require data.",
}: {
  name: string;
  value: string;
  setValue: Function;
  helperText: string;
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
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{name} is required.</FormErrorMessage>
      )}
    </FormControl>
  );
}

const Publish = () => {
  const [values, setValues] = useState({});

  const [tags, setTags] = useState([]);
  const handleTagsChange = useCallback(
    (event: SyntheticEvent, tags: string[]) => {
      setTags(tags);
    },
    []
  );

  const { user } = useUser();

  function setValue(value, name) {
    setValues({ ...values, [name]: value });
    console.log(value);
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
      <Container maxW={"container.md"}>
        <Box my="4rem">
          <Box mb="2rem">
            <Heading as="h3" mb={"0.5rem"}>
              Please Input the Metadata for your asset
            </Heading>
            <p>This is where you can publish your dataset</p>
          </Box>
          <Grid>
            <TextInput
              name="Price (USD)"
              value={getValue("PriceUSD")}
              setValue={(val) => setValue(val, "PriceUSD")}
              helperText="Please include the language the asset is in. Ex. English"
            />
            <TextInput
              name="Language"
              value={getValue("language")}
              setValue={(val) => setValue(val, "language")}
              helperText="Please include the language the asset is in. Ex. English"
            />
            <TextInput
              name="Version"
              value={getValue("version")}
              setValue={(val) => setValue(val, "version")}
              helperText="Please include the version number if you are updating a dataset. Otherwise input V1.0"
            />
            <TextInput
              name="Description"
              value={getValue("description")}
              setValue={(val) => setValue(val, "description")}
              helperText="Please include a description for your dataset"
            />
            <TextInput
              name="Name"
              value={getValue("name")}
              setValue={(val) => setValue(val, "name")}
              helperText="Please include a name for your dataset"
            />
            <Select
              name="Type"
              placeholder="Please select the type of asset you have"
              mt={"0.5rem"}
              onChange={(e) => setValue(e.target.value, "type")}
              variant="outline"
              color="white"
              background="brand.900"
              my={"0.5rem"}
            >
              <option value="algorithm">Algorithm</option>
              <option value="dataset">Dataset</option>
              <option value="compute">Dataset (Computer-Over-Data Only)</option>
            </Select>
            
            <ChakraTagInput name={"Tags"} tags={tags} onTagsChange={handleTagsChange} />
            <TextInput
              name="Tasks"
              value={getValue("tasks")}
              helperText="Please include the modalities used if applicable"
              setValue={(val) => setValue(val, "tasks")}
            />
            <TextInput
              name="Additional Information"
              value={getValue("additionalInformation")}
              setValue={(val) => setValue(val, "additionalInformation")}
              helperText="Please include any additional information."
            />

            {/* Such metadata can be taken from the json of the asset */}
            {/* <TextInput
              name="author"
              value={getValue("author")}
              setValue={(val) => setValue(val, "author")}
              helperText='Please include the Author'
            />
            <TextInput
              name="license"
              value={getValue("license")}
              setValue={(val) => setValue(val, "license")}
              helperText='Please include the License'
            />
            <TextInput
              name="links"
              value={getValue("links")}
              helperText='Please include any relevant links'
              setValue={(val) => setValue(val, "links")}
            /> 
            <TextInput
              name="modalities"
              value={getValue("modalities")}
              helperText='Please include the modalities used if applicable'
              setValue={(val) => setValue(val, "modalities")}
            /> *
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
              helperText='Please input the number '

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
            /> */}

            <Button
              onClick={uploadMetadata}
              backgroundColor={"brand.800"}
              mt={"2rem"}
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Publish;
