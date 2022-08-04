import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";

interface MenuItemProps {
  children: React.ReactNode;
  isLast?: boolean;
  to?: string;
  left?: boolean;
  right?: boolean;
}

const LeftButton = ({ children }: { children: React.ReactNode }) => (
  <Button
    borderRadius={2}
    bgGradient="linear(83.13deg, #E66FE0 0%, #9CAEEE 0%, #7D79D6 0%, #6581E3 32.76%, #9770C8 69.89%, #9B6CD7 100%)"
  >
    {children}
  </Button>
);
const RightButton = ({ children }: { children: React.ReactNode }) => (
  <Button bg="brand.800">{children}</Button>
);

const MenuItem = ({
  children,
  isLast,
  to = "/",
  left,
  right,
}: MenuItemProps) => {
  if (left) {
    return (
      <LeftButton>
        <Link href={to}>
          <Text display="block">{children}</Text>
        </Link>
      </LeftButton>
    );
  }
  if (right) {
    return (
      <RightButton>
        <Link href={to}>
          <Text display="block">{children}</Text>
        </Link>
      </RightButton>
    );
  }
  return (
    <Link href={to}>
      <Text display="block">{children}</Text>
    </Link>
  );
};

export default MenuItem;
