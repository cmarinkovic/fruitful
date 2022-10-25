import React from "react";
import { useRouter } from "next/router";

import Button from "./Button";

import ArrowIcon from "../assets/arrow.svg";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="text-center mt-24">
      <div className="mb-8">
        <span className="mb-4 text-4xl  tracking-tight leading-none text-gray-600 md:text-5xl lg:text-6xl ">
          Welcome to{" "}
        </span>
        <span className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-lime-700 via-lime-500 to-lime-700 animate-text">
          Fruitful
        </span>
      </div>

      <Button onClick={() => router.push("/commodities")}>
        <div className="rotated">
          <ArrowIcon className="w-6 h-6 rotate-180 shrink-0" />
        </div>
      </Button>
    </div>
  );
}
