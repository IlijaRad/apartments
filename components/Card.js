import Image from "next/image";

const Card = ({
  title,
  description,
  guests,
  view,
  size,
  highlights,
  imgSrc,
  slug,
}) => {
  return (
    <div id={slug} className="border border-gray-200 lg:rounded-2xl">
      <Image className="lg:rounded-t-2xl" height={420} src={imgSrc} />
      <div className="px-6 py-5 lg:px-9 lg:py-7">
        <h3 className="text-lg font-semibold text-gray-900 lg:text-2xl">
          {title}
        </h3>
        <div className="mt-5 text-sm font-semibold text-gray-700 lg:mt-8 lg:leading-5">
          Short description
        </div>
        <p className="mt-2 text-sm text-gray-600 lg:mt-3.5 lg:leading-7">
          {description}
        </p>
        <div className="mt-5 text-sm font-semibold text-gray-700 lg:mt-7">
          Specifications
        </div>
        <div className="mt-5 lg:mt-6">
          <div className="grid grid-cols-[70px_auto] text-gray-600">
            <div className="text-xs font-bold uppercase leading-5">Guests</div>
            <div className="text-sm font-medium">{guests}</div>
          </div>
          <div className="mt-2 grid grid-cols-[70px_auto] text-gray-600 lg:mt-3.5">
            <div className="text-xs font-bold uppercase leading-5">View</div>
            <div className="text-sm font-medium">{view}</div>
          </div>
          <div className="mt-2 grid grid-cols-[70px_auto] text-gray-600 lg:mt-3.5">
            <div className="text-xs font-bold uppercase leading-5">Size</div>
            <div className="text-sm font-medium">
              (US) - {size.us} ft<sup>2</sup>&nbsp;&nbsp;&nbsp;(EU) - {size.eu}{" "}
              m<sup>2</sup>
            </div>
          </div>
        </div>
        <div className="mt-6 text-sm font-semibold text-gray-700 lg:mt-8">
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
