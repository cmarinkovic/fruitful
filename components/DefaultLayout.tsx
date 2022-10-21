import React from "react";
import Navbar from "./Navbar";

interface Props {
  children?: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
}
