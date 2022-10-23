import { ABOUT, ACCOMMODATION, CONTACT, HOME } from "../constants/routes";
import { APARTMENTS } from "../seed/apartments";
import Logo from "../public/logo.svg";

const FooterSection = () => {
  return (
    <footer className="mt-12 border border-gray-200 bg-gray-50 lg:mt-[132px]">
      <div className="mx-auto max-w-[1360px] px-8 pt-[72px] pb-[52px]">
        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-[250px_auto_auto_auto]">
          <div className="flex flex-col gap-y-8">
            <div className="text-sm font-semibold text-gray-700">
              Social Media
            </div>
            <div className="flex flex-col gap-y-4">
              <a
                href="#"
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Facebook
              </a>
              <a
                href="#"
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Instagram
              </a>
              <a
                href="#"
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="text-sm font-semibold text-gray-700">
              Contact information
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="text-sm font-medium text-gray-700">Email</div>
              <a
                href="mailto: contact@greenleafstudioapartments.com"
                className="w-fit overflow-hidden text-ellipsis break-all text-sm font-medium text-gray-500 transition-colors hover:text-gray-600"
              >
                contact@greenleafstudioapartments.com
              </a>
              <div className="mt-3 text-sm font-medium text-gray-700">
                Phone
              </div>
              <div className="text-sm font-medium text-gray-500">
                +38X XXX XXX
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="text-sm font-semibold text-gray-700">
              Accommodation
            </div>
            <div className="flex flex-col gap-y-4">
              {APARTMENTS.map(({ id, title, slug }) => (
                <a
                  key={id}
                  href={`#${slug}`}
                  className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="text-sm font-semibold text-gray-700">Site Map</div>
            <div className="flex flex-col gap-y-4">
              <a
                href={ACCOMMODATION}
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Accommodation
              </a>
              <a
                href={ABOUT}
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                About Us
              </a>
              <a
                href={CONTACT}
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Contact Us
              </a>
              <a
                href="#location"
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Location
              </a>
              <a
                href="#testimonials"
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Testimonials
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8">
          <a href={HOME} className="flex h-8 w-[300px]">
            <Logo />
          </a>
          <div className="text-sm font-medium text-gray-500">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span className="hidden xs:inline">Greenleafstudioapartments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
