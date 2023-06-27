import { useEffect, useState } from "react";
import { useCarsData } from "../context/Provider";
import SkeletonCard from "./SkeletonCard";
import CarCard from "./CarCard";
import Filter from "./Filter";
import Sort from "./Sort";
const CarsGrid = () => {
  const [segment, setSegment] = useState("Todos");
  const [sorted, setSorted] = useState("");
  const { carsData, getCarsData } = useCarsData();
  const loading = [1, 2, 3, 4, 5, 6, 7, 8];
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!carsData) {
        await getCarsData();
      }
    };
    fetchData();
  }, [carsData, getCarsData]);

  useEffect(() => {
    filterAndSortData();
  }, [segment, sorted]);

  const filterAndSortData = () => {
    let filteredCarsData = carsData;

    if (segment === "Pickups y Comerciales") {
      filteredCarsData = carsData.filter((car) => car?.segment === segment);
    } else if (segment === "SUVs") {
      filteredCarsData = carsData.filter((car) => car?.segment === segment);
    } else if (segment !== "Todos") {
      filteredCarsData = carsData.filter(
        (car) =>
          car.segment !== "SUVs" && car.segment !== "Pickups y Comerciales"
      );
    }

    let sortedCarsData = filteredCarsData;

    if (sorted === "cheapest") {
      sortedCarsData = filteredCarsData.slice().sort((a, b) => a.price - b.price);
    } else if (sorted === "expensive") {
      sortedCarsData = filteredCarsData.slice().sort((a, b) => b.price - a.price);
    } else if (sorted === "older") {
      sortedCarsData = filteredCarsData.slice().sort((a, b) => b.year - a.year);
    } else if (sorted === "newer") {
      sortedCarsData = filteredCarsData.slice().sort((a, b) => a.year - b.year);
    }

    setFilteredData(sortedCarsData);
  };

  console.log(segment);
  console.log(filteredData);
  return (
    <section className="w-full h-full">
      <div className="w-full flex justify-between px-1">
        <Filter segment={segment} setSegment={setSegment} />
        <Sort sorted={sorted} setSorted={setSorted} />
      </div>
      {filteredData
        ? filteredData.map((c, i) => (
            <CarCard
              name={c?.name}
              year={c?.year}
              price={c?.price}
              img={c?.thumbnail}
              key={i}
            />
          ))
        : loading.map((n, i) => <SkeletonCard key={i} />)}
    </section>
  );
};

export default CarsGrid;
