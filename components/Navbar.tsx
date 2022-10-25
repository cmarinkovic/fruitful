import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { ExampleContext } from "../contexts/ExampleContext";

interface ButtonProps {
  onClick: () => void;
}

interface NavbarItemProps {
  links: { label: string; path: string }[];
}

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const [exampleState, setExampleState] = useContext(ExampleContext);

  const toggleIsExample = () => {
    setExampleState({ ...exampleState, isExample: !exampleState.isExample });
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Commodities",
      path: "/commodities",
    },
    {
      label: "Growers",
      path: "/growers",
    },
    {
      label: "Clients",
      path: "/clients",
    },
    {
      label: "Harvests",
      path: "harvests",
    },
  ];

  const NavbarHamburger = ({ onClick }: ButtonProps) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    );
  };

  const NavbarItems = ({ links }: NavbarItemProps) => {
    /* ---------------------------------- Links --------------------------------- */
    const router = useRouter();

    const activeLinkClasses =
      "cursor-pointer block py-2 pr-4 pl-3 text-white bg-lime-700 rounded md:bg-transparent md:text-lime-700 md:p-0 ";

    const inactiveLinkClasses =
      "cursor-pointer block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 ";

    const getLinkClasses = (route: string) => {
      return router.pathname === route
        ? activeLinkClasses
        : inactiveLinkClasses;
    };

    /* ------------------------------- Hamburgers ------------------------------- */
    const openHamburgerClasses = "w-full md:block md:w-auto";

    const closedHamburgerClasses = "hidden w-full md:block md:w-auto";

    const getHamburgerClasses = () => {
      return isHamburgerOpen ? openHamburgerClasses : closedHamburgerClasses;
    };

    return (
      <div className={getHamburgerClasses()}>
        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
          {links.map((link) => {
            return (
              <li key={link.label} className={getLinkClasses(link.path)}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const NavbarLogo = () => {
    return (
      <div className="flex items-center">
        <div className="mr-3 h-6 w-6  relative">
          <Image src="/logo.png" layout="fill" objectFit="cover" alt="" />
        </div>

        <span className="self-center text-xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-lime-700 via-lime-600 to-lime-700">
          Fruitful
        </span>
      </div>
    );
  };

  const Toggle = ({ onClick }: ButtonProps) => {
    return (
      <label
        htmlFor="default-toggle"
        className="inline-flex relative items-center cursor-pointer"
        onClick={onClick}
      >
        <input
          type="checkbox"
          value={exampleState.isExample}
          onChange={toggleIsExample}
          className="sr-only peer"
          checked={exampleState.isExample}
        />

        <button className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-al peer-checked:bg-lime-700" />
        <span className="ml-3 text-sm font-medium text-gray-900 ">
          Example Data
        </span>
      </label>
    );
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-around items-center mx-auto">
          <NavbarLogo />
          <Toggle onClick={toggleIsExample} />
          <NavbarHamburger onClick={toggleHamburger} />
          <NavbarItems links={links} />
        </div>
      </nav>
    </div>
  );
}
