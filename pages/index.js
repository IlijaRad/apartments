import Image from "next/image";
import Img1 from "../public/img/1.png";

const IMAGES = [
  { id: 1, src: Img1, alt: "", position: "UP" },
  { id: 2, src: Img1, alt: "", position: "DOWN" },
  { id: 3, src: Img1, alt: "", position: "UP" },
  { id: 4, src: Img1, alt: "", position: "DOWN" },
  { id: 5, src: Img1, alt: "", position: "UP" },
];

export default function Home() {
  return (
    <div id="home" className="pt-[110px] overflow-hidden">
      <h1 className="mx-auto text-7xl max-w-5xl text-gray-900 font-semibold text-center tracking-tight">
        Located at the perfect place for a perfect vacation
      </h1>
      <p className="mx-auto mt-6 text-gray-600 text-lg text-center max-w-3xl">
        A modern, upscale hospitality that is passionate about &apos;making
        moments&apos;, recognizing that small gestures make a big difference to
        our guests, our owners and our people, offering unforgettable
        experiences.
      </p>
      <button className="mx-auto block font-semibold mt-10 py-2.5 px-7 border border-gray-200 rounded-lg text-gray-700 text-lg tracking-tight">
        Make a reservation now
      </button>
      <div className="mt-[140px] flex gap-x-[45px] -mx-8 gap-y-0">
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
}
