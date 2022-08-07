import { CloseIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface DatasetProps {
  // todo: better define the props here for the object
  data: any;
}

const Dataset = ({ data }: DatasetProps) => {
  return (
    <Grid
      w="100%"
      maxW="1065px"
      templateColumns="repeat(8,auto)"
      templateRows="repeat(4,auto)"
      border="3px solid #FFFFFF"
      borderRadius="15px"
      px={2}
      py={4}
      gap={2}
      columnGap={{ base: 2, md: 4, lg: 8 }}
    >
      <GridItem gridRow="1" colStart={1} colSpan={5}>
        <Heading color="brand.500">Title of Dataset</Heading>
      </GridItem>
      <GridItem
        gridRow="1"
        colStart={5}
        colSpan={4}
        justifySelf="end"
        alignSelf="center"
      >
        <Text fontSize="xl">15 Purchases | EEG</Text>
      </GridItem>
      <GridItem gridRow="2" colStart={1} colSpan={7}>
        <Text fontSize="sm" color="brand.gray">
          Uploaded by Ahnaaf Khan on 2022-20-7 | Updated 2022-20-9
        </Text>
      </GridItem>
      <GridItem my={2} gridRow="3" colStart={1} colSpan={{ base: 8, md: 6 }}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ipsa
          dignissimos illum minus, officia nihil. Tenetur, ratione quas
          praesentium nam quod eveniet. Hic, libero quae consectetur qui numquam
          voluptatem debitis?
        </Text>
      </GridItem>
      <GridItem gridRow="4" colStart={1} colSpan={2}>
        <Text>
          Tasks:{" "}
          <Tag
            m={1}
            borderRadius="2px"
            size="md"
            variant="outline"
            colorScheme="neuraPurple"
          >
            <TagLabel color="neuraPurple.500" fontWeight="500">
              Sleep
            </TagLabel>
          </Tag>
        </Text>
      </GridItem>
      <GridItem gridRow="4" colStart={4}>
        <Text>Sessions: 1</Text>
      </GridItem>
      <GridItem gridRow="4" colStart={5}>
        <Text>Participants: 1</Text>
      </GridItem>
      <GridItem gridRow="4" colStart={6}>
        <Text>Participant Ages: 21-41</Text>
      </GridItem>
      <GridItem gridRow="4" colStart={7}>
        <Text>Size: 4.66GB</Text>
      </GridItem>
      <GridItem gridRow="4" colStart={8}>
        <Text>Files: 185</Text>
      </GridItem>
      <GridItem gridRow="5" colStart={1} colSpan={5}>
        <Text color="brand.500" fontWeight="bold" fontSize="xl">
          Price: 15 NEURON
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Dataset;
