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
        <div className="flex w-full items-center justify-between">
          <div className="text-xl font-semibold uppercase text-[#0F172A]">
            <a href={HOME}>Greenleafstudioapartments</a>
          </div>
          <nav>
            <ul className="flex gap-x-12">
              {LINKS.map(({ id, label, href }) => (
                <li
                  key={id}
                  className="transition-color font-medium text-gray-700 hover:text-gray-800"
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
