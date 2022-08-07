import { CloseIcon } from "@chakra-ui/icons";
import {
  Container,
  Grid,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Dataset from "./Dataset";

const DatasetSection = () => {
  const [data, setData] = useState(["hi"]);
  const [selectedOptions, setSelectedOptions] = useState([
    {
      name: "Modality",
      options: ["enterprise"],
    },
    {
      name: "Price",
      options: ["100-200"],
    },
  ]);

  return (
    <Container p={0} m={0} w="100%" maxW="100%">
      {/* Filter section */}
      <Text fontSize="xl" fontWeight="bold">
        Filtered Datasets: {data.length}
      </Text>
      <Grid gridAutoFlow="column">
        {selectedOptions.map((option, index) => (
          <>
            <Text key="index">
              {option.name}:{" "}
              {option.options.map((option, index) => (
                <Tag
                  key={index}
                  m={1}
                  borderRadius="2px"
                  size="md"
                  variant="outline"
                  colorScheme="neuraPurple"
                >
                  <TagLabel color="neuraPurple.500" fontWeight="500">
                    {option}
                  </TagLabel>
                  <TagRightIcon
                    cursor="pointer"
                    w={2}
                    h={2}
                    as={CloseIcon}
                    color="neuraPurple.500"
                  />
                </Tag>
              ))}
            </Text>
          </>
        ))}
      </Grid>
      {data.map((item, index) => (
        <Dataset data={item} key={index} />
      ))}
    </Container>
  );
};

export default DatasetSection;
