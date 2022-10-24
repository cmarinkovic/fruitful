import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Fruitful</title>
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
