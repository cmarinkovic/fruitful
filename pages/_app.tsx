import type { AppProps } from "next/app";

import { ModalsProvider } from "../contexts/ModalsContext";
import { ExampleProvider } from "../contexts/ExampleContext";

import DefaultLayout from "../components/DefaultLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ExampleProvider>
      <ModalsProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ModalsProvider>
    </ExampleProvider>
  );
}

export default MyApp;
