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
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100070729604791"
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Facebook
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/greenolive.apartments/"
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Instagram
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Green+Olive+Apartments+-+Cavtat/@42.579888,18.2275215,15z/data=!4m5!3m4!1s0x0:0xe763bf028a31ee8b!8m2!3d42.579888!4d18.2275215"
                className="transition-color w-fit text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Google
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
                href="mailto:vacation-rental@outlook.com"
                className="w-fit overflow-hidden text-ellipsis break-all text-sm font-medium text-gray-500 transition-colors hover:text-gray-600"
              >
                vacation-rental@outlook.com
              </a>
              <div className="mt-3 text-sm font-medium text-gray-700">
                Phone
              </div>
              <a
                href="tel:+385916117498"
                className="w-fit text-sm font-medium text-gray-500 transition-colors hover:text-gray-600"
              >
                +385916117498
              </a>
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
          <a href={HOME} className="w-[300px] pt-0.5">
            <Logo />
          </a>
          <div className="text-sm font-medium leading-8 text-gray-500">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span className="hidden xs:inline">Greenleafstudioapartments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
