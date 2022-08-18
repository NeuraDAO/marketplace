import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import TabOptions from "./TabOptions";
import TextInput from "./TextInput";

interface SearchToggleProps {
  // TODO: write proper typedefs for this
  option: any;
}

const SearchTypeDisplay = ({ type, query, option, handleClick }) => {
  switch (type) {
    case "radio":
      return (
        <TabOptions query={query} option={option} handleClick={handleClick} />
      );
    case "text":
      return (
        <TextInput handleClick={handleClick} query={query} option={option} />
      );
  }
  return null;
};

const SearchToggle = ({ option }: SearchToggleProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClick = (key: string, value: string) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, [key]: value },
    });
  };

  return (
    <Box
      w={240}
      pb={1}
      borderBottomColor="white"
      borderBottomWidth="2px"
      mb={4}
    >
      <Flex
        justifyContent="space-between"
        alignItems="baseline"
        cursor="pointer"
        onClick={() => setOpen(!open)}
      >
        <Text>{option.name}</Text>
        <Box animate={open ? { rotate: 180 } : { rotate: 0 }} as={motion.div}>
          <Image
            src="/chev-down.png"
            height="10px"
            width="20px"
            alt="arrow down"
            layout="fixed"
          />
        </Box>
      </Flex>
      {/* {open && 
        option.options.map((item, index) => (
          <Tag
            m={1}
            borderRadius="2px"
            size="md"
            key={index}
            variant="outline"
            colorScheme="neuraPurple"
          >
            <TagLabel color="neuraPurple.500" fontWeight="500">
              {item}
            </TagLabel>
            <TagRightIcon
              w={2}
              h={2}
              as={AddIcon}
              color="neuraPurple.500"
              cursor="pointer"
            />
          </Tag>
        ))} */}
      {/* set index to -1 initially so none of the tabs are selected */}
      {open && (
        <SearchTypeDisplay
          type={option.type}
          option={option}
          query={router.query}
          handleClick={handleClick}
        />
      )}
    </Box>
  );
};

export default SearchToggle;
