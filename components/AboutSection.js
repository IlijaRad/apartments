import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { REVIEWS } from "../seed/reviews";

const MAX_REVIEWS = 2;

const AboutSection = () => {
  const [reviewsShown, setReviewsShown] = useState(MAX_REVIEWS);

  return (
    <div id="about" className="px-6 pt-12 lg:px-12 lg:pt-[166px]">
      <h2 className="text-center font-semibold tracking-wide text-primary-500">
        About us
      </h2>
      <h3 className="mt-3.5 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-[52px]">
        A little bit about us
      </h3>
      <p className="mt-6 text-center text-lg leading-8 tracking-tight text-gray-600">
        A passion for making moments.
      </p>
      <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-gray-200 px-12 pt-9 pb-16 text-center text-lg leading-8 tracking-tight text-gray-600">
        Greenleafstudioapartments is a modern, upscale hospitality that is
        passionate about ‘making moments’, recognising that small gestures make
        a big difference to our guests, our owners and our people, offering
        unforgettable experiences. We do ordinary things in an extraordinary way
        – a philosophy that has defined our brand’s success from the very
        start.Set in Cavtat, 601 m from Rat Beach and 200 m from Cavtat
        Promenade, Greenleafstudioapartments offers accommodations with free
        WiFi, air conditioning and access to a garden.
        <br /> <br /> <br />
        Cavtat is located between the magic city in Dubrovnik on one side and
        beautiful Konavle on the other. There one can still feel the spirit of
        the past time and experience the centuries old trandition of our
        ancestors. It is an ideal holiday resort. Each visitor can discover his
        own wishes, enjoy the hidden coves at peace, long walks at the seaside
        or spend active holidays going in for recreational sports and
        entertainning cultural programmes. Dubrovnik Airport is 7 km away and a
        pick-up can be organized. The UNESCO-protected Old Town of Dubrovnik can
        be reached within 20 km. As Cavtat and Dubrovnik are in such close
        proximity we are fortunate to be part of this rich heritage, but what
        sets Cavtat apart is its exclusivity to offer leisure and relaxation but
        with all the happenings of a city life.
      </div>
      <div className="mx-auto mt-16 h-1 w-[112px] bg-primary-400"></div>
      <div className="mt-14 flex items-center justify-center gap-x-2">
        <StarIcon className="mt-3 h-8 w-8 text-primary-500" />
        <StarIcon className="mt-1.5 h-8 w-8 text-primary-500" />
        <StarIcon className="h-8 w-8 text-primary-500" />
        <StarIcon className="mt-1.5 h-8 w-8 text-primary-500" />
        <StarIcon className="mt-3 h-8 w-8 text-primary-500" />
      </div>
      <h2
        id="testimonials"
        className="pt-[116px] text-center font-semibold tracking-wide text-primary-500"
      >
        About us
      </h2>
      <h3 className="mt-3.5 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-[52px]">
        What our clients say about us
      </h3>
      <p className="mt-6 text-center text-lg leading-8 tracking-tight text-gray-600">
        Reviews are coming from clients all around the world.
      </p>
      <div className="mx-auto mt-[72px] flex max-w-3xl flex-col gap-y-6">
        {REVIEWS.slice(0, reviewsShown).map(
          ({ id, name, location, rating, review }) => (
            <div
              key={id}
              className={
                id === reviewsShown && REVIEWS.length > reviewsShown
                  ? "faded relative rounded-2xl border border-gray-200 py-10 px-11"
                  : "relative rounded-2xl border border-gray-200 py-10 px-11"
              }
            >
              <div className="flex items-center justify-center gap-x-1">
                {[...Array(rating).keys()].map((_, ix) => (
                  <StarIcon key={ix} className="h-5 w-5 text-primary-500" />
                ))}
              </div>
              <div className="mt-4 text-center text-lg font-semibold tracking-tight text-gray-600">
                {name} ({location})
              </div>
              <p className="mt-4 text-center leading-7 tracking-tight text-gray-600">
                {review}
              </p>
            </div>
          )
        )}
        {REVIEWS.length > reviewsShown ? (
          <button
            onClick={() => setReviewsShown((reviewsShown) => reviewsShown + 2)}
            className="mx-auto mt-6 w-fit rounded-lg border border-gray-200 py-3 px-7 text-sm tracking-tight text-gray-700"
          >
            Show more
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default AboutSection;
