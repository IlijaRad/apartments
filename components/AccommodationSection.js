import Card from "./Card";
import { APARTMENTS } from "../seed/apartments";

const AccommodationSection = () => {
  return (
    <div id="accommodation" className="pt-16 lg:pt-[140px]">
      <div className="px-6 lg:px-12">
        <h2 className="text-center font-semibold tracking-wide text-primary-500">
          Accommodation
        </h2>
        <h3 className="mt-4 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:mt-3.5 lg:text-5xl lg:leading-[52px]">
          Pick a place that fits you the most
        </h3>
        <p className="mt-6 text-center text-base tracking-tight text-gray-600 lg:text-lg lg:leading-8">
          Choose from a variety of options, with different views and number of
          guests
        </p>
      </div>
      <div className="mt-8 grid gap-y-8 lg:mt-[112px] lg:grid-cols-2 lg:gap-x-6 lg:px-6">
        {APARTMENTS.map(
          ({
            id,
            description,
            guests,
            highlights,
            size,
            title,
            view,
            imgSrc,
          }) => (
            <Card
              key={id}
              description={description}
              guests={guests}
              highlights={highlights}
              size={size}
              title={title}
              view={view}
              imgSrc={imgSrc}
            />
          )
        )}
      </div>
    </div>
  );
};

export default AccommodationSection;
