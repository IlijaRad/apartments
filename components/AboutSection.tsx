"use client";

import { useState } from "react";

const reviews = [
  { id: 1, name: "Sander", location: "Norway", rating: 5, review: "We had an amazing stay! Beautiful place and the kindest host! She gave us a tour of the city in her car at arrival and even delivered us fresh tomatoes from her little garden. We really recommend this apartment!" },
  { id: 2, name: "Arnaud", location: "United Kingdom", rating: 5, review: "Clean and charming studio, in a wonderful location. Friendly and attentive host, and overall fantastic value for money!" },
  { id: 3, name: "Maksym", location: "United Kingdom", rating: 5, review: "It's been my pleasure to stay here. Everything is nice, clean and orderly. Thanks a lot Elena for making my month a blast." },
  { id: 4, name: "Fation", location: "Belgium", rating: 5, review: "Elena's apartment is clean, convenient, well decorated and well located! The small terrace is very pleasant. We really enjoyed our stay in Cavtat! Thanks Elena!" },
];

function Star({ className = "h-5 w-5" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="m10 1.6 2.45 5 5.52.8-3.99 3.89.94 5.5L10 14.2l-4.92 2.59.94-5.5L2.03 7.4l5.52-.8L10 1.6Z" /></svg>;
}

export default function AboutSection() {
  const [reviewsShown, setReviewsShown] = useState(2);

  return (
    <section id="about" className="px-6 pt-20 lg:px-12 lg:pt-[166px]">
      <h2 className="text-center font-semibold tracking-wide text-primary-700">About us</h2>
      <h3 className="mt-3.5 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-[52px]">A little bit about us</h3>
      <p className="mt-6 text-center leading-8 tracking-tight text-gray-600 lg:text-lg">Two welcoming studios in Cavtat, close to the sea and Dubrovnik.</p>
      <div className="mx-auto mt-9 max-w-2xl rounded-2xl border-gray-200 pb-16 text-center text-base leading-7 tracking-tight text-gray-600 md:text-lg md:leading-8 lg:mt-16 lg:border lg:px-12 lg:pt-9">
        Our garden-view studios are set in Cavtat, just 200 m from the promenade. The town lies between Dubrovnik and Konavle, with quiet coves, seaside walks and a relaxed coastal atmosphere. Dubrovnik Airport is 7 km away, and the UNESCO-protected Old Town of Dubrovnik is about 20 km away.
      </div>
      <div className="mx-auto h-1 w-[112px] bg-primary-400 lg:mt-16" />
      <div role="img" aria-label="Five star reviews" className="mt-14 flex items-center justify-center gap-x-2">
        <Star className="mt-3 h-8 w-8 text-primary-500" /><Star className="mt-1.5 h-8 w-8 text-primary-500" /><Star className="h-8 w-8 text-primary-500" /><Star className="mt-1.5 h-8 w-8 text-primary-500" /><Star className="mt-3 h-8 w-8 text-primary-500" />
      </div>
      <h2 id="testimonials" className="pt-6 text-center font-semibold tracking-wide text-primary-700 lg:pt-[116px]">Testimonials</h2>
      <h3 className="mt-3.5 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-[52px]">What our clients say about us</h3>
      <p className="mt-6 text-center leading-8 tracking-tight text-gray-600 lg:text-lg">Reviews are coming from clients all around the world.</p>
      <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-y-3 lg:mt-[72px] lg:gap-y-6">
        {reviews.slice(0, reviewsShown).map((review, index) => (
          <article key={review.id} className={`${index === reviewsShown - 1 && reviews.length > reviewsShown ? "faded " : ""}relative rounded-2xl border-gray-200 py-5 lg:border lg:px-11 lg:py-10`}>
            <div role="img" aria-label={`${review.rating} out of 5 stars`} className="flex items-center justify-center gap-x-1 text-primary-500">{Array.from({ length: review.rating }, (_, star) => <Star key={star} />)}</div>
            <div className="mt-4 text-center text-lg font-semibold tracking-tight text-gray-600">{review.name} ({review.location})</div>
            <p className="mt-4 text-center leading-7 tracking-tight text-gray-600">{review.review}</p>
          </article>
        ))}
        {reviews.length > reviewsShown && <button type="button" onClick={() => setReviewsShown((shown) => shown + 2)} className="mx-auto mt-6 w-fit rounded-lg border border-gray-200 py-3 px-7 text-sm font-semibold tracking-tight text-gray-700 transition-colors hover:bg-gray-50">Show more</button>}
      </div>
    </section>
  );
}
