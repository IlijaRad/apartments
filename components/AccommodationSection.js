import Img from "../public/img/2.png";
import Card from "./Card";

const APARTMENTS = [
  {
    id: 1,
    title: "Two-Bedroom Apartment",
    description:
      "Set in Cavtat, 80m from the nearest beach, 600 m from Rat Beach and 200 m from Cavtat Promenade, Tiffany Apartments offers accommodations with free WiFi, air conditioning and access to a garden.",
    guests: "4 + 1",
    view: "Garden",
    size: {
      us: 377,
      eu: 35,
    },
    hightlights: ["Air Conditioner", "Private Parking", "Free Wi-Fi"],
    imgSrc: Img,
  },
  {
    id: 2,
    title: "Two-Bedroom Apartment",
    description:
      "Set in Cavtat, 80m from the nearest beach, 600 m from Rat Beach and 200 m from Cavtat Promenade, Tiffany Apartments offers accommodations with free WiFi, air conditioning and access to a garden.",
    guests: "4 + 1",
    view: "Garden",
    size: {
      us: 377,
      eu: 35,
    },
    hightlights: ["Air Conditioner", "Private Parking", "Free Wi-Fi"],
    imgSrc: Img,
  },
  {
    id: 3,
    title: "Two-Bedroom Apartment",
    description:
      "Set in Cavtat, 80m from the nearest beach, 600 m from Rat Beach and 200 m from Cavtat Promenade, Tiffany Apartments offers accommodations with free WiFi, air conditioning and access to a garden.",
    guests: "4 + 1",
    view: "Garden",
    size: {
      us: 377,
      eu: 35,
    },
    hightlights: ["Air Conditioner", "Private Parking", "Free Wi-Fi"],
    imgSrc: Img,
  },
];

const AccommodationSection = () => {
  return (
    <div id="accommodation" className="pt-[140px]">
      <h2 className="text-center font-semibold tracking-wide text-primary-500">
        Accommodation
      </h2>
      <h3 className="mt-3.5 text-center text-5xl font-semibold leading-[52px] tracking-tight text-gray-900">
        Pick a place that fits you the most
      </h3>
      <p className="mt-6 text-center text-lg leading-8 tracking-tight text-gray-600">
        Choose from a variety of options, with different views and number of
        guests
      </p>
      <div className="mt-[112px] flex">
        {APARTMENTS.map(
          ({
            id,
            description,
            guests,
            hightlights,
            size,
            title,
            view,
            imgSrc,
          }) => (
            <Card
              key={id}
              description={description}
              guests={guests}
              hightlights={hightlights}
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
