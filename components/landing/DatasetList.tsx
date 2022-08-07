import { Container, Text } from "@chakra-ui/react";
import { useState } from "react";
import Dataset from "./Dataset";

const DatasetSection = () => {
  const [data, setData] = useState(["hi"]);
  const [selectedOptions, setSelectedOptions] = useState([
    {
      name: "Choose Modality",
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
      <Text>Filtered Datasets: {data.length}</Text>
      {data.map((item, index) => (
        <Dataset data={item} key={index} />
      ))}
    </Container>
  );
};

export default DatasetSection;
