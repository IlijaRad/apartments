import HomeSection from "../components/HomeSection";
import AccommodationSection from "../components/AccommodationSection";
import ContactSection from "../components/ContactSection";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Green Leaf Studio Apartments</title>
      </Head>
      <HomeSection />
      <AccommodationSection />
      <ContactSection />
    </>
  );
};

export default Home;
