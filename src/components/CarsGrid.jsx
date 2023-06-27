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

  useEffect(() => {
    const fetchData = async () => {
      if (!carsData) {
        await getCarsData();
      }
    };
    fetchData();
  }, [carsData, getCarsData]);

  return (
    <section className="w-full h-full">
      <div className="w-full flex justify-between px-1">
        <Filter segment={segment} setSegment={setSegment} />
        <Sort sorted={sorted} setSorted={setSorted} />
      </div>
      {carsData
        ? carsData.map((c, i) => (
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
