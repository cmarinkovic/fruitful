import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const NavbarHamburger = () => {
    return (
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    );
  };

  const NavbarLogo = () => {
    return (
      <a href="#" className="flex items-center">
        <div className="mr-3 h-6 w-6  relative">
          <Image src="/logo.png" layout="fill" objectFit="cover" alt="" />
        </div>

        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Fruitful
        </span>
      </a>
    );
  };

  interface Props {
    items: { label: string; path: string }[];
  }

  const NavbarItems = ({ items }: Props) => {
    const router = useRouter();

    const activeLinkClass =
      "cursor-pointer block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";

    const inactiveLinkClass =
      "cursor-pointer block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

    const getClass = (route: string) => {
      return router.pathname === route ? activeLinkClass : inactiveLinkClass;
    };

    return (
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        {" "}
        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {items.map((item) => {
            return (
              <li key={item.label} className={getClass(item.path)}>
                <Link href={item.path} aria-current="page">
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const items = [
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

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavbarLogo />
          <NavbarHamburger />
          <NavbarItems items={items} />
        </div>
      </nav>
    </div>
  );
}
