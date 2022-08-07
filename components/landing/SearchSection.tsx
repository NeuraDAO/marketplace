import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { AddIcon } from "@chakra-ui/icons";
import SearchToggle from "./SearchToggle";

// TODO: get options from openneuro site
const searchOptions = [
  {
    name: "Choose Modality",
    options: ["startup", "enterprise", "government", "nonprofit", "other"],
  },
  {
    name: "Price",
    options: ["100-200", "200-500", "500-1000", "1000+"],
  },
];

const SearchSection = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <Grid
      justifyItems="center"
      placeSelf="center"
      mt={8}
      // maxWidth="100%"
      width="100%"
    >
      <Heading fontSize="3xl" fontWeight="normal">
        Search NeuraDAO
      </Heading>
      {/* search bar area */}
      <Text justifySelf="start">Keywords</Text>
      <Flex mb={4}>
        <Input
          h={8}
          fontSize={14}
          borderRadius={0}
          w={200}
          placeholder="Enter Keyword(s) to search"
        />
        <Button w={4} p={0} h={8} borderRadius={0} bg="white">
          <Image src="/plus.png" width={20} height={20} alt="plus button" />
        </Button>
      </Flex>
      {/* list of all the options */}
      {searchOptions.map((option, index) => (
        <SearchToggle option={option} key={index} />
      ))}
    </Grid>
  );
};

export default SearchSection;
