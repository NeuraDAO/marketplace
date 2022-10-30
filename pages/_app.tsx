import "@fontsource/work-sans";

import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UserProvider } from "@auth0/nextjs-auth0";

import { default as colors } from "../styles/colors";
import { default as breakpoints } from "../styles/breakpoints";
import { default as styles } from "../styles/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ChakraProvider theme={extendTheme({ colors, breakpoints, styles })}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
