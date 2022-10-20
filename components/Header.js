import { HOME, ABOUT, ACCOMMODATION, CONTACT } from "../constants/routes";

const LINKS = [
  {
    id: 1,
    label: "Home",
    href: HOME,
  },
  {
    id: 2,
    label: "Accommodation",
    href: ACCOMMODATION,
  },
  {
    id: 3,
    label: "Contact us",
    href: CONTACT,
  },
  {
    id: 4,
    label: "About us",
    href: ABOUT,
  },
];

const Header = () => {
  return (
    <div className="border-b border-gray-100">
      <header className="mx-auto flex max-w-7xl items-center justify-center p-6">
        <div className="flex w-full items-center justify-between gap-x-6">
          <div className="text-xs font-semibold uppercase text-slate-900 md:text-base md:tracking-wide lg:text-xl lg:tracking-wider">
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
        </div>
      </header>
    </div>
  );
};

export default Header;
