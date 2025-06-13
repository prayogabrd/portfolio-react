import React from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import FontAwesomeIcon from "../assets/fontawesome@6.7.2";

import logo from "../assets/img/fokus-kripto_pxl.jpeg";

const Navbar: React.FC = () => {
  const { isLight, setIsLight } = useThemeContext();

  return (
    <nav className="backdrop-blur shadow-sm fixed top-0 right-0 left-0 z-10 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="flex justify-between h-16">
          <div className="flex items-center text-black dark:text-white">
            <img className="h-4/5" src={logo} alt="Fokus Kripto😹" />
          </div>
          <div className="flex space-x-4 items-center">
            <div className="inline-block h-3/5 aspect-square relative">
              <div className="inline-block aspect-square h-4/6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-2xl">
                <span className="text-black dark:text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-cinematic">
                  <FontAwesomeIcon icon="fa-solid fa-moon-stars dark:fa-sun-cloud dark:fa-sm" />
                </span>
              </div>
              <input
                type="checkbox"
                className="absolute top-0 bottom-0 left-0 right-0 opacity-0"
                onChange={() => setIsLight(!isLight)}
              />
            </div>
            <a
              className="inline-block px-3.5 py-1.5 font-bold rounded-md text-purple-50 bg-purple-600"
              href="mailto:prayogabrd@aol.com"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
