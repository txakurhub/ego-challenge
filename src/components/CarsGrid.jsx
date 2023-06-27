import { useEffect, useState } from "react";
import { useCarsData } from "../context/Provider";
import SkeletonCard from "./SkeletonCard";
import CarCard from "./CarCard";
import Filter from "./Filter";
import Sort from "./Sort";
const CarsGrid = ({ setSection }) => {
  const [segment, setSegment] = useState("Todos");
  const [sorted, setSorted] = useState("newer");
  const { carsData, getCarsData, isLoading } = useCarsData();
  const loading = [1, 2, 3, 4, 5, 6, 7, 8];
  const [filteredData, setFilteredData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  let data = carsData;
  useEffect(() => {
    const fetchData = async () => {
      if (!carsData) {
        setIsLoadingData(true); // Establecer isLoadingData a true durante la carga
        await getCarsData();
        setIsLoadingData(false); // Establecer isLoadingData a false una vez que los datos se carguen
      }
    };
    fetchData();
  }, [carsData, getCarsData]);

  useEffect(() => {
    filterAndSortData();
  }, [segment, sorted]);

  const filterAndSortData = () => {
    if (!carsData) return;
    let filteredCarsData = carsData;

    if (segment === "Pickups y Comerciales") {
      filteredCarsData = carsData.filter((car) => car?.segment === segment);
    } else if (segment === "SUVs") {
      filteredCarsData = carsData.filter(
        (car) => car?.segment === "SUVs" || car?.segment === "Crossovers"
      );
    } else if (segment !== "Todos") {
      filteredCarsData = carsData.filter(
        (car) =>
          car.segment !== "SUVs" && car.segment !== "Pickups y Comerciales"
      );
    }

    let sortedCarsData = filteredCarsData;

    if (sorted === "cheapest") {
      sortedCarsData = filteredCarsData
        .slice()
        .sort((a, b) => a.price - b.price);
    } else if (sorted === "expensive") {
      sortedCarsData = filteredCarsData
        .slice()
        .sort((a, b) => b.price - a.price);
    } else if (sorted === "older") {
      sortedCarsData = filteredCarsData.slice().sort((a, b) => b.year - a.year);
    } else if (sorted === "newer") {
      sortedCarsData = filteredCarsData.slice().sort((a, b) => a.year - b.year);
    }
    setFilteredData(sortedCarsData);
  };
  return (
    <section className="w-full py-5 lg:w-11/12 h-full mx-auto lg:px-5">
      <div className="w-full flex justify-between mx-auto">
        <Filter segment={segment} setSegment={setSegment} />
        <Sort sorted={sorted} setSorted={setSorted} />
      </div>
      <div className="w-11/12 h-[2px] bg-line self-center mx-auto mb-5 lg:hidden"></div>
      <div className="hidden lg:block w-full h-[3px] bg-line self-center mx-auto mb-5 "></div>
      <div className="lg:grid lg:grid-cols-4 gap-2 items-start py-10">
        {isLoadingData
          ? loading.map((n, i) => <SkeletonCard key={i} />)
          : filteredData.length < 1
          ? data?.map((c, i) => (
              <CarCard
                name={c?.name}
                year={c?.year}
                price={c?.price}
                img={c?.thumbnail}
                key={i}
                id={c?.id}
                setSection={setSection}
              />
            ))
          : filteredData.map((c, i) => (
              <CarCard
                name={c?.name}
                year={c?.year}
                price={c?.price}
                img={c?.thumbnail}
                key={i}
                id={c?.id}
                setSection={setSection}
              />
            ))}
      </div>
    </section>
  );
};

export default CarsGrid;
