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

// TODO: get options from openneuro site & write typedefs
const searchOptions = [
  {
    name: "Text Search",
    value: "text",
    placeholder: "Search by name, description, or tags",
    type: "text",
  },
  {
    name: "Access Type",
    type: "radio",
    value: "accessType",
    options: [
      { name: "download", value: "access" },
      { name: "compute", value: "compute" },
    ],
  },
  {
    name: "Service Type",
    type: "radio",
    value: "serviceType",
    options: [
      { name: "datasets", value: "dataset" },
      { name: "algorithms", value: "algorithm" },
    ],
  },
  {
    name: "Sort Order",
    type: "radio",
    value: "sortOrder",
    options: [
      { name: "Ascending", value: "asc" },
      { name: "Descending", value: "desc" },
    ],
  },
];

const SearchSection = () => {
  return (
    <Grid justifyItems="center" placeSelf="center" mt={8} width="100%">
      <Heading fontSize="3xl" fontWeight="normal">
        Search NeuraDAO
      </Heading>
      {/* list of all the options */}
      {searchOptions.map((option, index) => (
        <SearchToggle option={option} key={index} />
      ))}
    </Grid>
  );
};

export default SearchSection;
