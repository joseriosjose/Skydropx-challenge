/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { NavBar } from "components";
import { CustomThemeProvider } from "providers";
import { Provider } from "react-redux";
import storeGlobal from "../_redux";

const LOGO_SKYDROPX =
  "https://skydropx.com/assets/landing5/skydropx_logo-4fb27c0601c3bccddd15cad09e612eb0d777dcdbcebae56c0382a8fe2978dfa9.svg";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Skydropx Challenge</title>
        <meta name="description" content="React+ Coding Challenge - Skydropx" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Provider store={storeGlobal}>
        <CustomThemeProvider>
          <NavBar urlImg={LOGO_SKYDROPX} />
          <Component {...pageProps} />
        </CustomThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
