import HomeSection from "../components/HomeSection";
import AccommodationSection from "../components/AccommodationSection";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import LocationSection from "../components/LocationSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Green Leaf Studio Apartments</title>
      </Head>
      <HomeSection />
      <AccommodationSection />
      <ContactSection />
      <AboutSection />
      <FooterSection />
    </>
  );
};

export default Home;
