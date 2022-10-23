import HomeSection from "../components/HomeSection";
import AccommodationSection from "../components/AccommodationSection";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Head>
        <title>Green Leaf Studio Apartments</title>
      </Head>
      <Header />
      <HomeSection />
      <AccommodationSection />
      <ContactSection />
      <AboutSection />
      <FooterSection />
    </>
  );
};

export default Home;
