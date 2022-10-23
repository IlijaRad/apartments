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
      <div className="mx-auto grid max-w-lg gap-8 pt-14 md:max-w-4xl md:grid-cols-2 md:pt-20">
        <LocationSection />
        <div className="border-gray-200 py-6 md:border md:py-12">
          <h4 className="text-center text-2xl font-semibold leading-10 tracking-tight text-gray-900 lg:text-[32px]">
            How to contact us?
          </h4>
          <div className="mx-auto grid max-w-[240px] grid-cols-[90px_1fr] items-center justify-center pt-10 md:pt-20">
            <div className="text-lg font-medium text-gray-900">Phone:</div>
            <span className="text-base font-normal text-gray-700">
              XXX XXX XXX
            </span>
          </div>
          <div className="mx-auto grid max-w-[240px] grid-cols-[90px_1fr] justify-center pt-4">
            <div className="text-lg font-medium text-gray-900">Email:</div>
            <span className="text-base font-normal text-gray-700">
              email@mail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
