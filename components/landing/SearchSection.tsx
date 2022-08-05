import {
  Box,
  Button,
  Container,
  Flex,
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
import { CloseIcon } from "@chakra-ui/icons";

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
    <Container maxWidth="100%" width="350px">
      <Heading fontSize="3xl" fontWeight="normal">
        Search NeuraDAO
      </Heading>
      {/* search bar area */}
      <Text>Keywords</Text>
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
      {searchOptions.map((option) => {
        const [open, setOpen] = useState(false);
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
              <Box
                animate={open ? { rotate: 180 } : { rotate: 0 }}
                as={motion.div}
              >
                <Image
                  src="/chev-down.png"
                  height="10px"
                  width="20px"
                  alt="arrow down"
                  layout="fixed"
                />
              </Box>
            </Flex>
            {open &&
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
                    as={CloseIcon}
                    color="neuraPurple.500"
                  />
                </Tag>
              ))}
          </Box>
        );
      })}
    </Container>
  );
};

export default SearchSection;
