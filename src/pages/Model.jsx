import { useParams } from "react-router-dom";
import { useCarsData } from "../context/Provider";
import { useEffect } from "react";
import { ModelHero } from "../components/ModelHero";
import Slide from "../components/Slide";
import Highlights from "../components/Highlights";

const Model = () => {
  const { carDetail, getCarDetail } = useCarsData();
  const { id } = useParams();
  let name,
    photo,
    description,
    title,
    model_features,
    model_highlights,
    slideData;
  useEffect(() => {
    const fetchData = async () => {
      if (!carDetail) {
        await getCarDetail(id);
      }
    };
    fetchData();
  }, [carDetail, getCarDetail]);

  if (carDetail) {
    ({ name, photo, description, title, model_features, model_highlights } =
      carDetail);
    slideData = model_highlights.map((h) => ({
      name: h.title,
      image: h.image,
      description: h.content,
    }));
    slideData = [
      ...slideData,
      ...model_features,
      ...slideData,
      ...model_features,
    ];
  }
  return (
    <section className="w-full py-5 h-full mx-auto ">
      <ModelHero
        name={name}
        img={photo}
        description={description}
        title={title}
      />
      <Slide data={slideData} />
      <div className="flex items-center justify-center flex-col gap-5 py-20 mb-10">
        {model_highlights?.map((m, i) => (
          <Highlights data={m} key={i} side={i % 2} />
        ))}
      </div>
    </section>
  );
};

export default Model;
