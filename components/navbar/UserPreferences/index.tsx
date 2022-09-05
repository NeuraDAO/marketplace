import React, { ReactElement, useState } from "react";
import { Tooltip, Button } from "@chakra-ui/react";
import Cog from "@images/cog.svg";
import styles from "./index.module.css";
import Currency from "./Currency";
import Debug from "./Debug";
import Caret from "@images/caret.svg";
// import useDarkMode from 'use-dark-mode'
import Appearance from "./Appearance";
import TokenApproval from "./TokenApproval";
import { useMarketMetadata } from "@context/MarketMetadata";
import Image from "next/image";

export default function UserPreferences(): ReactElement {
  const { appConfig } = useMarketMetadata();
  const [isOpen, setIsOpen] = useState(false);
  // Calling this here because <Style /> is not mounted on first load
  // const darkMode = useDarkMode(false, appConfig?.darkModeConfig)
  const Content = (): ReactElement => {
    return (
      <ul className={styles.preferencesDetails}>
        <Currency />
        <TokenApproval />
        {/* <Appearance darkMode={darkMode} /> */}
        <Debug />
      </ul>
    );
  };
  return (
    <Tooltip label={<Content />} isOpen={isOpen}>
      <Button bg="brand.800" onClick={() => setIsOpen(!isOpen)}>
        <Image
          style={{ padding: 0 }}
          width={25}
          height={25}
          alt="icon"
          src="/cog.png"
        />
      </Button>
    </Tooltip>
  );
}
