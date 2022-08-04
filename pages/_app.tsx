import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { default as colors } from "../styles/colors";
import { default as breakpoints } from "../styles/breakpoints";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme({ colors, breakpoints })}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
