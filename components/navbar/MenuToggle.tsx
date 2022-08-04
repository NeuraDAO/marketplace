import { Box } from "@chakra-ui/react";

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box
      gridColumn={2}
      justifySelf="end"
      pr={10}
      display={{ base: "block", nav1: "none" }}
      onClick={toggle}
    >
      {isOpen ? "Close" : "Open"}
    </Box>
  );
};

export default MenuToggle;
