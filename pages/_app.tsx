import "@fontsource/work-sans";

import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { default as colors } from "../styles/colors";
import { default as breakpoints } from "../styles/breakpoints";
import { default as styles } from "../styles/styles";
import UrqlProvider from "@context/UrqlProvider";
import PricesProvider from "@context/Prices";
import Decimal from "decimal.js";
import MarketMetadataProvider from "@context/MarketMetadata";

import Web3Provider from "@context/Web3";
import { UserPreferencesProvider } from "@context/UserPreferences";
import ConsentProvider from "@context/CookieConsent";

import "../src/stylesGlobal/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MarketMetadataProvider>
      <Web3Provider>
        <UrqlProvider>
          <UserPreferencesProvider>
            <PricesProvider>
              <ConsentProvider>
                <ChakraProvider
                  theme={extendTheme({ colors, breakpoints, styles })}
                >
                  <Component {...pageProps} />
                </ChakraProvider>
              </ConsentProvider>
            </PricesProvider>
          </UserPreferencesProvider>
        </UrqlProvider>
      </Web3Provider>
    </MarketMetadataProvider>
  );
}

export default MyApp;
