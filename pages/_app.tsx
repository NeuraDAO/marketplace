import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { default as colors } from "../styles/colors";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme({ colors })}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
