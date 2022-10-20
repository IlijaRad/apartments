import Image from "next/image";
import { CONTACT } from "../constants/routes";
import Img1 from "../public/img/1.png";

const IMAGES = [
  { id: 1, src: Img1, alt: "", position: "UP" },
  { id: 2, src: Img1, alt: "", position: "DOWN" },
  { id: 3, src: Img1, alt: "", position: "UP" },
  { id: 4, src: Img1, alt: "", position: "DOWN" },
  { id: 5, src: Img1, alt: "", position: "UP" },
];

const HomeSection = () => {
  return (
    <div id="home" className="overflow-hidden pt-[110px]">
      <div className="px-6 lg:px-12">
        <h1 className="mx-auto max-w-5xl text-center text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-7xl">
          Located at the perfect place for a perfect vacation
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-gray-600 lg:text-lg">
          A modern, upscale hospitality that is passionate about &apos;making
          moments&apos;, recognizing that small gestures make a big difference
          to our guests, our owners and our people, offering unforgettable
          experiences.
        </p>
      </div>
      <a
        href={CONTACT}
        className="mx-auto mt-10 block w-fit rounded-lg border border-gray-200 py-2.5 px-7 text-base font-semibold tracking-tight text-gray-700 lg:text-lg"
      >
        Make a reservation now
      </a>
      <div className="-mx-8 mt-[140px] flex justify-center gap-x-3 md:gap-x-5 lg:gap-x-[45px]">
        {IMAGES.map(({ id, src, alt, position }) => (
          <div
            key={id}
            className={
              position === "DOWN"
                ? "mt-[64px] flex items-end"
                : "flex items-start"
            }
          >
            <Image src={src} alt={alt} width={360} height={542} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
