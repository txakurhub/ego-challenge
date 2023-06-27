import CarsGrid from "../components/CarsGrid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { CarsDataProvider } from "../context/Provider";

const Home = () => {
  return (
    <CarsDataProvider>
      <Navbar />
      <Hero />
      <CarsGrid />
      <Footer />
    </CarsDataProvider>
  );
};

export default Home;
