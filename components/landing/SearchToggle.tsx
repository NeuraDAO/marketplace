import { Box, Flex, Tag, TagLabel, TagRightIcon, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { AddIcon } from "@chakra-ui/icons";

interface SearchToggleProps {
  option: any;
}

const SearchToggle = ({ option }: SearchToggleProps) => {
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
              as={AddIcon}
              color="neuraPurple.500"
              cursor="pointer"
            />
          </Tag>
        ))}
    </Box>
  );
};

export default SearchToggle;
