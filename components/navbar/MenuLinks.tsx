import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import MenuItem from "./MenuItem";
import loadable from "@loadable/component";
import UserPreferences from "./UserPreferences";
const Wallet = loadable(() => import("./Wallet"));

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box
      display={{ base: isOpen ? "flex" : "none", nav1: "block" }}
      flexBasis={{ base: "100%", nav1: "auto" }}
      gridColumn={{ base: "1 / -1", nav1: "2" }}
      gap={6}
    >
      <Flex
        w="100%"
        flexDirection={{ base: "column", nav2: "row" }}
        gap={6}
        justifyContent="space-between"
      >
        <Flex gap={6}>
          <MenuItem left to="/publish/1">
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
          <Wallet />
          {/* <MenuItem right to="/settings" isLast>
            <Image
              style={{ padding: 0 }}
              width={25}
              height={25}
              alt="icon"
              src="/cog.png"
            />
          </MenuItem> */}
          <UserPreferences />
        </Flex>
      </Flex>
    </Box>
  );
};

export default MenuLinks;
