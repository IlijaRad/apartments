import LocationSection from "./LocationSection";

const ContactSection = () => {
  return (
    <div id="contact" className="px-6 pt-12 lg:px-12 lg:pt-[166px] ">
      <h2 className="text-center font-semibold tracking-wide text-primary-500">
        Contact us
      </h2>
      <h3 className="mt-3.5 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-[52px]">
        Get in contact with us
      </h3>
      <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 pt-14 md:max-w-4xl md:grid-cols-2 md:pt-20">
        <LocationSection />
        <div className="mx-auto border-gray-200 md:border md:px-6 md:py-12">
          <h4 className="text-center text-2xl font-semibold leading-10 tracking-tight text-gray-900 lg:text-[32px]">
            How to contact us?
          </h4>
          <div className="grid grid-cols-[58px_minmax(210px,1fr)] items-center justify-center pt-10 text-sm md:grid-cols-[65px_minmax(240px,1fr)] md:pt-20 md:text-base">
            <div className="font-medium text-gray-900">Phone:</div>
            <span className="font-normal text-gray-700">+385916117498</span>
          </div>
          <div className="grid grid-cols-[58px_minmax(210px,1fr)] items-center justify-center pt-4 text-sm md:grid-cols-[65px_minmax(240px,1fr)] md:text-base">
            <div className="font-medium text-gray-900">Email:</div>
            <span className="font-normal text-gray-700">
              vacation-rental@outlook.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
