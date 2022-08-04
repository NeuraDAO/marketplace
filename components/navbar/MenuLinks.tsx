import { Box, Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import MenuItem from "./MenuItem";

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box
      display={{ base: isOpen ? "flex" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      gridColumn={{ base: "1 / -1", md: "2" }}
      gap={6}
    >
      {/* <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      > */}
      <Flex w="100%" justifyContent="space-between">
        <Flex gap={6}>
          <MenuItem left to="/publish">
            Publish
          </MenuItem>
          <MenuItem left to="/profile">
            Profile
          </MenuItem>
          <MenuItem left to="/faq">
            FAQ
          </MenuItem>
        </Flex>
        <Flex gap={6}>
          <MenuItem right to="/network">
            <Image
              style={{ padding: 0 }}
              width={25}
              height={25}
              alt="icon"
              src="/network.png"
            />
          </MenuItem>
          <MenuItem right to="/signin">
            Sign In
          </MenuItem>
          <MenuItem right to="/settings" isLast>
            <Image
              style={{ padding: 0 }}
              width={25}
              height={25}
              alt="icon"
              src="/cog.png"
            />
          </MenuItem>
        </Flex>
      </Flex>
      {/* </Stack> */}
    </Box>
  );
};

export default MenuLinks;
