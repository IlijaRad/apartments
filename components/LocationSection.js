import LocationIcon from "../public/location.svg";

const LocationSection = () => {
  return (
    <div
      id="location"
      className="mx-auto border-gray-200 md:border md:px-6 md:py-12"
    >
      <h4 className="text-center text-2xl font-semibold leading-10 tracking-tight text-gray-900 lg:text-[32px]">
        Where are we located?
      </h4>
      <div className="mx-auto mt-6 w-fit">
        <LocationIcon />
      </div>
      <p className="mx-auto mt-8 max-w-xs text-center font-medium tracking-tight text-gray-700">
        Cavtat, Dubrovačko-neretvanska županija, Croatia
      </p>
    </div>
  );
};

export default LocationSection;
