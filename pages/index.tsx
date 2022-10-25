import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="container mx-8">
      <Head>
        <title>Fruitful - Home</title>
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
