import { Button, Flex, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const TextInput = ({ handleClick, option, query }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(query[option.value]);
  }, [query]);

  return (
    <>
      {/* <Text justifySelf="start">{option.name}</Text> */}
      <Flex mb={4}>
        <Input
          h={8}
          fontSize={14}
          borderRadius={0}
          w={200}
          placeholder={option.placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          onClick={() => handleClick(option.value, value)}
          w={4}
          p={0}
          h={8}
          borderRadius={0}
          bg="white"
        >
          <Image src="/plus.png" width={20} height={20} alt="plus button" />
        </Button>
      </Flex>
    </>
  );
};

export default TextInput;
