import { Box } from "@chakra-ui/react";
import React from "react";
import { motion, Transition, SVGMotionProps } from "framer-motion";

interface Props extends SVGMotionProps<any> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
  toggle?: () => void;
}

const MenuToggle = ({
  isOpen,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  transition = null,
  lineProps = null,
  toggle,
  ...props
}: Props) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      // translateX: 0,
    },
    opened: {
      rotate: 45,
      // translateX: 0,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateX: 0,
    },
    opened: {
      rotate: -45,
      translateX: -3,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <Box
      gridColumn={2}
      justifySelf="end"
      pr={10}
      display={{ base: "block", nav1: "none" }}
      onClick={toggle}
    >
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        color="white"
        {...props}
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0"
          y2="0"
          variants={top}
          color="white"
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={center}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="4"
          y2="4"
          variants={bottom}
          {...lineProps}
        />
      </motion.svg>
    </Box>
  );
};

export default MenuToggle;
