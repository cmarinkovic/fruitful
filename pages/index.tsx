import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="container mx-8">
      <Head>
        <title>Fruitful - Home</title>
      </Head>
      <Hero />
    </div>
  );
}
