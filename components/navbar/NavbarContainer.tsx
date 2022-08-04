import { Grid } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Grid
      as="nav"
      alignItems="center"
      templateColumns="auto 1fr"
      gridAutoFlow="row"
      gap={10}
      flexWrap="wrap"
      w="100%"
      p="2.5%"
      pb={6}
      pt={6}
      borderBottomRightRadius={25}
      bg="brand.100"
      color="white"
      {...props}
    >
      {children}
    </Grid>
  );
};

export default NavBarContainer;
