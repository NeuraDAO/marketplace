import { Button, Flex, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

const TextInput = ({ handleClick, option }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <Text justifySelf="start">Keywords</Text>
      <Flex mb={4}>
        <Input
          h={8}
          fontSize={14}
          borderRadius={0}
          w={200}
          placeholder="Enter Keyword(s) to search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button w={4} p={0} h={8} borderRadius={0} bg="white">
          <Image src="/plus.png" width={20} height={20} alt="plus button" />
        </Button>
      </Flex>
    </>
  );
};

export default TextInput;
