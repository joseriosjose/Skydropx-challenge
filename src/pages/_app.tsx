/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { NavBar } from "components";
import { CustomThemeProvider } from "providers";

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
      <CustomThemeProvider>
        <NavBar />
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
}

export default MyApp;
