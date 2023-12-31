import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={require("../assets/images/logo2.png")} className="h-12 mr-3" alt="Flowbite Logo" />
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-10 h-10 rounded-full" src={require("../assets/images/adnane.jpg")} alt="user photo" />
          </button>

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/bugs"
                className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent ${
                  location.pathname == "/bugs" || location.pathname == "/bugs/add" ? "text-orange-600" : "text-black"
                }  md:p-0 `}
              >
                Bugs
              </Link>
            </li>
            <li>
              <Link
                to="/bugFixs"
                className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent ${
                  location.pathname == "/bugFixs" || location.pathname == "/bugFixs/add" ? "text-orange-600" : "text-black"
                }  md:p-0 `}
              >
                Bug Fixs
              </Link>
            </li>
            <li>
              <Link
                to="/evolutions"
                className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent ${
                  location.pathname == "/evolutions" || location.pathname == "/evolutions/add" ? "text-orange-600" : "text-black"
                }  md:p-0 `}
              >
                Evolutions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
