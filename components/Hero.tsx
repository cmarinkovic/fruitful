import React from "react";
import { useRouter } from "next/router";

import Button from "./Button";

export default function Hero() {
  const router = useRouter();

  const ArrowIcon = () => {
    return (
      <svg
        className="w-6 h-6 rotate-180 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  };

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
          <ArrowIcon />
        </div>
      </Button>
    </div>
  );
}
