import Link from "next/link";
import { HOME, ABOUT, ACCOMMODATION, CONTACT } from "../constants/routes";

const LINKS = [
  {
    id: 1,
    label: "Home",
    href: HOME,
  },
  {
    id: 2,
    label: "About us",
    href: ABOUT,
  },
  {
    id: 3,
    label: "Accommodation",
    href: ACCOMMODATION,
  },
  {
    id: 4,
    label: "Contact us",
    href: CONTACT,
  },
];

const Header = () => {
  return (
    <div className="border-b border-gray-100">
      <header className="py-6 max-w-7xl flex items-center justify-center mx-auto">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase text-[#0F172A] text-xl font-semibold">
            <Link href={HOME}>
              <a>Greenleafstudioapartments</a>
            </Link>
          </div>
          <nav>
            <ul className="flex gap-x-12">
              {LINKS.map(({ id, label, href }) => (
                <li
                  key={id}
                  className="text-gray-700 font-medium hover:text-gray-800 transition-color"
                >
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
