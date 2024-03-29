import Image from "next/image";
import { CONTACT } from "../constants/routes";
import Img1 from "../public/img/home/6.jpg";
import Img2 from "../public/img/home/1.jpg";
import Img3 from "../public/img/home/2.jpg";
import Img4 from "../public/img/home/5.jpg";
import Img5 from "../public/img/home/3.jpg";
import { useEffect, useState } from "react";

const IMAGES = [
  { id: 1, src: Img1, alt: "", position: "UP" },
  { id: 2, src: Img2, alt: "", position: "DOWN" },
  { id: 3, src: Img3, alt: "", position: "UP" },
  { id: 4, src: Img4, alt: "", position: "DOWN" },
  { id: 5, src: Img5, alt: "", position: "UP" },
];

const HomeSection = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [displayCount, setDisplayCount] = useState(5);
  useEffect(() => {
    setSmallScreen(window.matchMedia("(max-width: 768px)").matches);
    const handler = (e) => setSmallScreen(e.matches);
    if (window.matchMedia("(max-width: 768px)"))
      document.addEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (smallScreen) setDisplayCount(3);
    else setDisplayCount(5);
  }, [smallScreen]);

  return (
    <div id="home" className="overflow-hidden pt-12 md:pt-[110px]">
      <div className="px-6 lg:px-12">
        <h1 className="mx-auto max-w-5xl text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-7xl">
          Located at the perfect place for a perfect vacation
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-gray-600 lg:text-lg">
          A modern, upscale hospitality that is passionate about &quot;making
          moments&quot;, recognizing that small gestures make a big difference
          to our guests, our owners and our people, offering unforgettable
          experiences.
        </p>
      </div>
      <a
        href={CONTACT}
        className="mx-auto mt-6 block w-fit rounded-lg border border-gray-200 py-2.5 px-6 text-sm font-semibold tracking-tight text-gray-700 md:px-7 md:text-base lg:mt-10 lg:text-lg"
      >
        Make a reservation now
      </a>
      <div className="-mx-4 mt-16 flex justify-center gap-x-0.5 md:-mx-8 md:mt-[140px] md:gap-x-2 lg:gap-x-4 xl:gap-x-10">
        {IMAGES.slice(0, displayCount).map(({ id, src, alt, position }) => (
          <div
            key={id}
            className={
              position === "DOWN"
                ? "mt-8 flex items-end md:mt-16"
                : "flex items-start"
            }
          >
            <Image
              className="rounded-md"
              src={src}
              alt={alt}
              width={360}
              height={542}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
