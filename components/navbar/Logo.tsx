import { Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

const Logo = (props) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" {...props}>
      <Image width={40} height={40} src="/logo.png" alt="logo" />
      <Text p={0} fontSize="3xl" fontWeight="600">
        NeuraDAO
      </Text>
    </Flex>
  );
};

export default Logo;
