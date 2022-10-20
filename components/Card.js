import Image from "next/image";

const Card = ({
  title,
  description,
  guests,
  view,
  size,
  highlights,
  imgSrc,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200">
      <Image className="rounded-t-2xl" height={420} src={imgSrc} />
      <div className="px-9 py-7">
        <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">
          {title}
        </h3>
        <div className="mt-8 text-sm font-semibold leading-5 text-gray-700">
          Short description
        </div>
        <p className="mt-3.5 leading-7 text-gray-600">{description}</p>
        <div className="mt-7 text-sm font-semibold text-gray-700">
          Specifications
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-[70px_auto] text-gray-600">
            <div className="text-xs font-bold uppercase leading-5">Guests</div>
            <div className="text-sm font-medium">{guests}</div>
          </div>
          <div className="mt-3.5 grid grid-cols-[70px_auto] text-gray-600">
            <div className="text-xs font-bold uppercase leading-5">View</div>
            <div className="text-sm font-medium">{view}</div>
          </div>
          <div className="mt-3.5 grid grid-cols-[70px_auto] text-gray-600">
            <div className="text-xs font-bold uppercase leading-5">Size</div>
            <div className="text-sm font-medium">
              (US) - {size.us} ft<sup>2</sup> (EU) - {size.eu} m<sup>2</sup>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm font-semibold text-gray-700">
          Hightlights
        </div>
        <div className="mt-3 flex flex-wrap gap-4">
          {highlights.map((highlight, ix) => (
            <div
              key={ix}
              className="rounded-md border border-gray-200 py-1.5 px-4 text-sm font-medium text-gray-700"
            >
              <span># </span>
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
