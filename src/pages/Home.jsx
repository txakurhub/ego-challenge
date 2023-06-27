import { useState } from "react";
import CarsGrid from "../components/CarsGrid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { CarsDataProvider } from "../context/Provider";
import Model from "../components/Model";

const Home = () => {
  const [section, setSection] = useState(0);
  return (
    <CarsDataProvider>
      <Navbar section={section} setSection={setSection} />
      {section === 0 ? (
        <>
          <Hero />
          <CarsGrid section={section} setSection={setSection} />
        </>
      ) : (
        <Model />
      )}

      <Footer />
    </CarsDataProvider>
  );
};

export default Home;
