import { signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "./Button";
import { useState } from "react";

export const Header = ({ setTab, tab, setNight, night, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (num) => {
    setTab(num);
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-bgheader py-2 md:py-4 ">
      <div className="container px-4 mx-auto md:flex md:items-center justify-between">
        <Image
          src={"/logo_asafe.webp"}
          width={50}
          quality={100}
          height={50}
          alt={"logo-asafe-digital"}
        />

        {!isMobile ? (
          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
            <span
              id="header-home"
              onClick={() => setTab(0)}
              href="#"
              className={`${
                tab === 0 && "bg-asafe"
              } p-2 lg:px-4 md:mx-2 text-gray-100 rounded hover:bg-asafehover hover:text-gray-50 transition-colors duration-300 font-bold cursor-pointer`}>
              Home
            </span>

            <span
              id="header-data"
              onClick={() => setTab(1)}
              href="#"
              className={`${
                tab === 1 && "bg-asafe"
              } p-2 lg:px-4 md:mx-2 text-gray-100 rounded hover:bg-asafehover hover:text-gray-50 transition-colors duration-300 font-bold cursor-pointer`}>
              Data
            </span>
            <span
              id="header-notes"
              onClick={() => setTab(2)}
              href="#"
              className={`${
                tab === 2 && "bg-asafe"
              } p-2 lg:px-4 md:mx-2 text-gray-100 rounded hover:bg-asafehover hover:text-gray-50 transition-colors duration-300 font-bold cursor-pointer`}>
              Notes
            </span>
            <span
              onClick={() => signOut("github")}
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-asafe text-center border border-solid border-asafe rounded hover:bg-asafehover hover:text-gray-50	 transition-colors duration-300 mt-1 md:mt-0 md:ml-1 cursor-pointer">
              SingOup
            </span>
            <span>
              <Button onClick={() => setNight((current) => !current)}>
                {night ? "Theme 1" : "Theme 2"}
              </Button>
            </span>
          </div>
        ) : (
          <>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => toggleMenu()}
                className="outline-none mobile-menu-button">
                <svg
                  class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="#fff">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div
              className={`${isOpen ? "block" : "hidden"}
               mobile-menu absolute top-20 left-0 w-full bg-bgheader flex justify-center items-center z-40`}>
              <ul className="">
                <li className="m-10">
                  <span
                    id="header-home"
                    onClick={() => toggleMenu(0)}
                    href="#"
                    className={`${
                      tab === 0 && "bg-asafe"
                    } p-2 lg:px-4 md:mx-2 text-gray-100 rounded hover:bg-asafehover hover:text-gray-50 transition-colors duration-300 font-bold cursor-pointer text-3xl	`}>
                    Home
                  </span>
                </li>
                <li className="m-10">
                  <span
                    id="header-data"
                    onClick={() => toggleMenu(1)}
                    href="#"
                    className={`${
                      tab === 1 && "bg-asafe"
                    } p-2 lg:px-4 md:mx-2 text-gray-100 rounded hover:bg-asafehover hover:text-gray-50 transition-colors duration-300 font-bold cursor-pointer text-3xl	`}>
                    Data
                  </span>
                </li>

                <li className="m-10">
                  <span
                    id="header-notes"
                    onClick={() => toggleMenu(2)}
                    href="#"
                    className={`${
                      tab === 2 && "bg-asafe"
                    } p-2 lg:px-4 md:mx-2 text-gray-100 rounded hover:bg-asafehover hover:text-gray-50 transition-colors duration-300 font-bold cursor-pointer text-3xl	`}>
                    Notes
                  </span>
                  <li className="my-10">
                    <span
                      id="header-SingOut"
                      onClick={() => signOut("github")}
                      href="#"
                      className="p-2 lg:px-4 md:mx-2 text-asafe text-center border border-solid border-asafe rounded hover:bg-asafehover hover:text-gray-50	 transition-colors duration-300 mt-1 md:mt-0 md:ml-1 cursor-pointer">
                      SingOut
                    </span>
                  </li>
                </li>
                <li className="my-10">
                  <Button onClick={() => setNight((current) => !current)}>
                    {night ? "Theme 1" : "Theme 2"}
                  </Button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
