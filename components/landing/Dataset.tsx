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
import Link from "next/link";
import { useState } from "react";
import { AssetExtended } from "src/@types/AssetExtended";
import { TokensPriceQuery } from "src/@types/subgraph/TokensPriceQuery";
import { OperationResult } from "urql";

interface DatasetProps {
  asset: AssetExtended;
  priceStr: String;
}

const Dataset = ({ asset, priceStr }: DatasetProps) => {
  const { metadata: data, stats, accessDetails, id } = asset;
  return (
    <Grid
      w="100%"
      maxW="1065px"
      templateColumns="repeat(8,auto)"
      templateRows="repeat(4,auto)"
      border="3px solid #FFFFFF"
      borderRadius="15px"
      px={3}
      py={4}
      gap={2}
      mb={8}
      columnGap={{ base: 2, md: 4, lg: 8 }}
    >
      <GridItem gridRow="1" colStart={1} colSpan={5}>
        <Link href={`/asset/${id}`}>
          <Heading cursor="pointer" color="brand.500">
            {data.name}
          </Heading>
        </Link>
      </GridItem>
      <GridItem
        gridRow="1"
        colStart={5}
        colSpan={4}
        justifySelf="end"
        alignSelf="center"
      >
        <Text fontSize="xl">
          {stats.orders} Purchase{stats.orders !== 1 && "s"} |{" "}
          {data?.tags?.[0].toUpperCase()}
        </Text>
      </GridItem>
      <GridItem gridRow="2" colStart={1} colSpan={7}>
        <Text fontSize="sm" color="brand.gray">
          Uploaded by {data.author} on {data.created} |{" "}
          {/* TODO: format date to local string */}
          {data.updated && `Updated ${data.updated}`}
        </Text>
      </GridItem>
      <GridItem my={2} gridRow="3" colStart={1} colSpan={{ base: 8, md: 6 }}>
        <Text>{data.description}</Text>
      </GridItem>
      <GridItem gridRow="4" colStart={1} colSpan={2}>
        <Text>
          Tasks:{" "}
          {data?.tags &&
            data.tags.map((tag, index) => (
              <Tag
                m={1}
                key={index}
                borderRadius="2px"
                size="md"
                variant="outline"
                colorScheme="neuraPurple"
              >
                <TagLabel color="neuraPurple.500" fontWeight="500">
                  {tag}
                </TagLabel>
              </Tag>
            ))}
          {/* {data?.tags?.length == 0 && <Text>None</Text>} */}
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
          {/* TODO: add support for dynamic pricing */}
          {/* {accessDetails
            ? `${accessDetails?.price} ${accessDetails?.baseToken?.symbol}`
            : "Price: loading..."}
          {console.log({ deets: accessDetails })}
          {!accessDetails && "No access details :("} */}
          {priceStr}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Dataset;
