import { PropsWithChildren } from "react";

export default function Title({ children }: PropsWithChildren) {
  return (
    <h1 className="text-2xl font-bold dark:text-white  mb-3">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-700 via-lime-600 to-lime-700">
        {children}
      </span>
    </h1>
  );
}
