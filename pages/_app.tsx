import "@fontsource/work-sans";

import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { default as colors } from "../styles/colors";
import { default as breakpoints } from "../styles/breakpoints";
import { default as styles } from "../styles/styles";
import UrqlProvider from "@context/UrqlProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UrqlProvider>
      <ChakraProvider theme={extendTheme({ colors, breakpoints, styles })}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UrqlProvider>
  );
}

export default MyApp;
