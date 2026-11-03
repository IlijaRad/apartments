"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Contact us", href: "#contact" },
  { label: "About us", href: "#about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "max-h-[282px] transition-all" : "max-h-20 overflow-hidden transition-all"}>
      <div className="h-20 border-b border-gray-100">
        <header className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4 md:pt-7 md:pb-[27px]">
          <div className="flex w-full items-center justify-between gap-x-6">
            <Link href="#home" aria-label="Green Leaf Studio Apartments home" className="block h-5 w-[250px] shrink-0 max-[345px]:w-[calc(100vw-7.5rem)] lg:h-6 lg:w-[300px]">
              <Image src="/logo.svg" alt="Green Olive" width={300} height={25} loading="eager" style={{ height: "auto" }} className="w-[250px] object-fill max-[345px]:w-[calc(100vw-7.5rem)] lg:w-[300px]" />
            </Link>
            <nav aria-label="Main navigation" className="hidden md:block">
              <ul className="flex gap-x-4 lg:gap-x-12">
                {links.filter(({ href }) => href !== "#home").map(({ label, href }) => (
                  <li key={href} className="transition-color text-sm leading-6 text-gray-700 hover:text-gray-800 lg:text-base lg:font-medium">
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className="rounded-full p-2.5 text-gray-600 transition-all focus:text-primary-400 focus:outline-none md:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={isOpen ? "hidden" : "h-7 w-7 text-gray-600"}>
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={isOpen ? "h-7 w-7 text-gray-600" : "hidden"}>
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </header>
      </div>
      <nav aria-label="Mobile navigation" aria-hidden={!isOpen} inert={!isOpen} className={isOpen ? "mb-6 opacity-100 transition-all md:hidden" : "pointer-events-none mb-6 opacity-0 transition-all"}>
        {links.map(({ label, href }) => (
          <Link key={href} href={href} className="transition-color block cursor-pointer border-b border-gray-100 px-6 py-4 text-sm font-medium text-slate-900">
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
