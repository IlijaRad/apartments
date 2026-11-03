import Image from "next/image";
import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import BackToTopButton from "@/components/BackToTopButton";
import Header from "@/components/Header";

const apartments = [
  { id: 1, title: "Green Olive Studio Apartment 1", description: "A calm, garden-view studio for up to three guests, with a kitchen, air conditioning, Netflix TV and free on-site parking.", image: "/img/apartments/1.jpg", alt: "Garden-view bedroom in Green Olive Studio Apartment 1", amenities: ["Wi-Fi", "Netflix TV", "Air conditioning", "Free parking", "Kitchen", "Dryer"] },
  { id: 2, title: "Green Olive Studio Apartment 2", description: "A comfortable garden-view studio for up to three guests, with a private patio or balcony, kitchen, air conditioning and free parking.", image: "/img/apartments/2.webp", alt: "Garden-view interior of Green Olive Studio Apartment 2", amenities: ["Wi-Fi", "Netflix TV", "Private patio or balcony", "Air conditioning", "Free parking", "Kitchen"] },
];

const photos = [
  ["/img/home/6.jpg", "A welcoming detail at Green Olive Studio Apartments"],
  ["/img/home/1.jpg", "Interior of a Green Olive studio apartment"],
  ["/img/home/2.jpg", "A relaxing corner in the apartment"],
  ["/img/home/5.jpg", "Comfortable space for a stay in Cavtat"],
  ["/img/home/3.jpg", "Apartment detail in Cavtat"],
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="mx-auto max-w-2xl text-center"><p className="font-semibold tracking-wide text-primary-700">{eyebrow}</p><h2 className="mt-3.5 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-[52px]">{title}</h2>{children && <p className="mt-6 leading-8 tracking-tight text-gray-600 lg:text-lg">{children}</p>}</div>;
}

export default function HomePage() {
  return <>
    <Header />
    <main>
      <section id="home" className="overflow-hidden pt-12 md:pt-[110px]">
        <div className="px-6 lg:px-12">
          <h1 className="mx-auto max-w-5xl text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-7xl">A quieter way to discover the Adriatic</h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base text-gray-600 lg:text-lg">Stay in a welcoming garden-view studio, just 200 m from Cavtat Promenade and 7 km from Dubrovnik Airport.</p>
        </div>
        <a href="#contact" className="mx-auto mt-6 block w-fit rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-semibold tracking-tight text-gray-700 md:px-7 md:text-base lg:mt-10 lg:text-lg">Make a reservation now</a>
        <div className="-mx-4 mt-16 flex justify-center gap-x-0.5 md:-mx-8 md:mt-[140px] md:gap-x-2 lg:gap-x-4 xl:gap-x-10">{photos.map(([src, alt], index) => <div key={src} className={`${index % 2 ? "mt-8 md:mt-16" : ""} relative aspect-[3/4] min-w-0 flex-1 self-start ${index > 2 ? "hidden md:block" : ""}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 33vw, 25vw" loading={index < 3 ? "eager" : "lazy"} fetchPriority={index === 0 || index === 2 ? "high" : "auto"} className="rounded-md object-cover" /></div>)}</div>
      </section>
      <section id="accommodation" className="pt-16 lg:pt-[140px]">
        <div className="px-6 lg:px-12">
          <h2 className="text-center font-semibold tracking-wide text-primary-700">Accommodation</h2>
          <h3 className="mt-4 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:mt-3.5 lg:text-5xl lg:leading-[52px]">Pick a place that fits you</h3>
          <p className="mt-6 text-center text-base tracking-tight text-gray-600 lg:text-lg lg:leading-8">Choose from two comfortable studios, each with garden views.</p>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1360px] gap-y-8 lg:mt-[112px] lg:grid-cols-2 lg:gap-x-6 lg:px-6">{apartments.map((apartment) => <article id={`studio-${apartment.id}`} key={apartment.id} className="border-y border-gray-200 lg:rounded-2xl lg:border">
          <div className="relative h-[360px]"><Image src={apartment.image} alt={apartment.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover lg:rounded-t-2xl" /></div>
          <div className="shrink-0 px-6 py-5 lg:px-9 lg:py-7"><h3 className="text-lg font-semibold text-gray-900 lg:text-2xl">{apartment.title}</h3><p className="mt-3.5 text-sm leading-7 text-gray-600 lg:text-base">{apartment.description}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-gray-100 py-5 text-sm"><div><dt className="text-gray-500">Guests</dt><dd className="mt-1 font-medium">Up to 3 · 1 bedroom · 1 bathroom</dd></div><div><dt className="text-gray-500">View</dt><dd className="mt-1 font-medium">Garden</dd></div><div><dt className="text-gray-500">Size</dt><dd className="mt-1 font-medium">35 m² · 377 ft²</dd></div></dl>
            <h4 className="mt-6 text-sm font-semibold text-gray-700">Apartment features</h4><ul className="mt-3 flex flex-wrap gap-3">{apartment.amenities.map((amenity) => <li key={amenity} className="rounded-md border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700">{amenity}</li>)}</ul>
          </div>
        </article>)}</div>
      </section>
      <AboutSection />
      <section id="location" className="px-6 pt-12 lg:px-12 lg:pt-[166px]"><SectionHeading eyebrow="Location" title="Where are we located?">Cavtat, Dubrovnik-Neretva County, Croatia · 200 m to the promenade · 7 km to Dubrovnik Airport</SectionHeading>
        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-xl border border-gray-200"><iframe title="Map showing Green Olive Apartments in Cavtat" src="https://maps.google.com/maps?q=42.579888%2C18.2275215&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block" /></div>
      </section>
      <section id="contact" className="px-6 pt-20 lg:px-12 lg:pt-[166px]"><SectionHeading eyebrow="Contact us" title="Get in contact with us">For dates, availability and rates, contact us directly and we’ll be happy to help.</SectionHeading><div className="mx-auto grid max-w-4xl gap-12 pt-12 md:grid-cols-2"><div className="border-gray-200 text-center md:border md:px-6 md:py-12"><h3 className="text-2xl font-semibold text-gray-900">Where are we located?</h3><p className="mx-auto mt-6 max-w-xs text-sm font-medium text-gray-700">Cavtat, Dubrovnik-Neretva County, Croatia</p><p className="mt-3 text-sm text-gray-600">200 m from the promenade</p></div><div className="border-gray-200 text-center md:border md:px-6 md:py-12"><h3 className="text-2xl font-semibold text-gray-900">How to contact us?</h3><div className="mt-8 flex justify-center gap-3 text-sm md:text-base"><span className="font-medium">Phone:</span><a href="tel:+385916117498" className="text-gray-700">+385 91 611 7498</a></div><div className="mt-4 flex justify-center gap-3 text-sm md:text-base"><span className="font-medium">Email:</span><a href="mailto:vacation-rental@outlook.com" className="text-gray-700">vacation-rental@outlook.com</a></div></div></div></section>
    </main>
    <BackToTopButton />
    <footer className="mt-12 border border-gray-200 bg-gray-50 px-8 py-12 lg:mt-[132px]"><div className="mx-auto grid max-w-[1360px] gap-10 sm:grid-cols-2 xl:grid-cols-4"><div><h3 className="text-sm font-semibold text-gray-700">Social Media</h3><div className="mt-6 flex flex-col gap-4 text-sm text-gray-500"><a className="transition-colors hover:text-gray-700" href="https://www.facebook.com/profile.php?id=100070729604791" target="_blank" rel="noreferrer">Facebook</a><a className="transition-colors hover:text-gray-700" href="https://www.instagram.com/greenolive.apartments/" target="_blank" rel="noreferrer">Instagram</a><a className="transition-colors hover:text-gray-700" href="https://www.google.com/maps/place/Green+Olive+Apartments+-+Cavtat/@42.579888,18.2275215,15z/" target="_blank" rel="noreferrer">Google Maps</a></div></div><div><h3 className="text-sm font-semibold text-gray-700">Contact information</h3><div className="mt-6 flex flex-col gap-3 text-sm"><a className="transition-colors hover:text-gray-700" href="mailto:vacation-rental@outlook.com">vacation-rental@outlook.com</a><a className="transition-colors hover:text-gray-700" href="tel:+385916117498">+385 91 611 7498</a></div></div><div><h3 className="text-sm font-semibold text-gray-700">Accommodation</h3><div className="mt-6 flex flex-col gap-4 text-sm text-gray-500">{apartments.map((apartment) => <a key={apartment.id} className="transition-colors hover:text-gray-700" href={`#studio-${apartment.id}`}>{apartment.title}</a>)}</div></div><div><h3 className="text-sm font-semibold text-gray-700">Site Map</h3><div className="mt-6 flex flex-col gap-4 text-sm text-gray-500"><a className="transition-colors hover:text-gray-700" href="#accommodation">Accommodation</a><a className="transition-colors hover:text-gray-700" href="#about">About Us</a><a className="transition-colors hover:text-gray-700" href="#contact">Contact Us</a><a className="transition-colors hover:text-gray-700" href="#location">Location</a><a className="transition-colors hover:text-gray-700" href="#testimonials">Testimonials</a></div></div></div><div className="mx-auto mt-12 flex max-w-[1360px] flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8"><Link href="#home" className="w-[250px]"><Image src="/logo.svg" alt="Green Olive" width={300} height={25} /></Link><div className="text-sm font-medium leading-8 text-gray-500">Copyright © {new Date().getFullYear()} <span className="hidden xs:inline">Greenleafstudioapartments</span></div></div></footer>
  </>;
}
