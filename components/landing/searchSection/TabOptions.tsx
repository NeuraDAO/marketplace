import { Tab, TabList, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";

/**
 * Gets the initial index from the query params for the tab list
 */
const getInitialTabIndex = (queryParams, option) => {
  const initialTabIndex = option.options.findIndex((item) => {
    return queryParams[option.value] === item.value;
  });
  return initialTabIndex;
};

const TabOptions = ({ option, handleClick, query }) => {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    setIndex(getInitialTabIndex(query, option));
  }, [query]);

  return (
    <Tabs
      onChange={(index) => setIndex(index)}
      index={index}
      size="md"
      variant="outline"
      colorScheme="neuraPurple"
    >
      <TabList>
        {option.options.map((item, index) => (
          <Tab
            m={1}
            fontSize="sm"
            _selected={{
              border: "1px solid",
              borderColor: "neuraPurple.500",
              color: "neuraPurple.500",
            }}
            borderRadius="2px"
            key={index}
            p="5px !important"
            // option.value is the name of the option and the item value is the value of the search option
            // ex. option.value = "accessType" and item.value = "download"
            onClick={() => handleClick(option.value, item.value)}
          >
            {item.name}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default TabOptions;
