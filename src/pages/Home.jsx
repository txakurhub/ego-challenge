import CarsGrid from "../components/CarsGrid";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { CarsDataProvider } from "../context/Provider";

const Home = () => {
  return (
    <CarsDataProvider>
      <Navbar />
      <Hero />
      <CarsGrid />
    </CarsDataProvider>
  );
};

export default Home;
