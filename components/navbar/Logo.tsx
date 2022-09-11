import { Flex, Spacer, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
// import Link from "next/link";

const Logo = (props) => {
  return (
    <Link href={"/?sort=nft.created&sortOrder=desc"}>
      <Flex alignItems="center" justifyContent="space-between" {...props}>
        <Image width={40} height={40} src="/logo.png" alt="logo" />
        <Text p={0} fontSize="3xl" fontWeight="600">
          NeuraDAO
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
