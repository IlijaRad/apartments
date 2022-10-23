import { HOME } from "../constants/routes";
import { LINKS } from "../seed/navLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div
      className={
        !isOpenMenu
          ? "max-h-[72px] overflow-hidden transition-all"
          : "max-h-[274px] transition-all"
      }
    >
      <div className="border-b border-gray-100">
        <header className="mx-auto flex max-w-7xl items-center justify-center px-6 py-3 md:p-6">
          <div className="flex w-full items-center justify-between gap-x-6">
            <div className="text-sm font-semibold uppercase text-slate-900 md:text-base md:tracking-wide lg:text-xl lg:tracking-wider">
              <a href={HOME}>Greenleafstudioapartments</a>
            </div>
            <nav className="hidden md:block">
              <ul className="flex gap-x-4 lg:gap-x-12">
                {LINKS.map(({ id, label, href }) => (
                  <li
                    key={id}
                    className="transition-color text-sm text-gray-700 hover:text-gray-800 lg:text-base lg:font-medium"
                  >
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              onClick={() => setIsOpenMenu((isOpenMenu) => !isOpenMenu)}
              className="rounded-full p-2.5 text-gray-600 transition-all hover:bg-gray-100 focus:text-primary-400 focus:outline-none md:hidden"
            >
              <Bars3Icon
                className={isOpenMenu ? "hidden" : "h-7 w-7 text-gray-600"}
              />
              <XMarkIcon
                className={isOpenMenu ? "h-7 w-7 text-gray-600" : "hidden"}
              />
            </button>
          </div>
        </header>
      </div>
      <div
        className={
          isOpenMenu
            ? "mb-6 opacity-100 transition-all md:hidden"
            : "mb-6 opacity-0 transition-all"
        }
      >
        {LINKS.map(({ id, label, href }) => (
          <a
            key={id}
            href={href}
            onClick={() => setIsOpenMenu((isOpenMenu) => !isOpenMenu)}
            className="transition-color block cursor-pointer border-b border-gray-200 px-6 py-4 text-sm font-medium text-slate-900"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
