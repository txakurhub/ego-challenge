import { useParams } from "react-router-dom";
import { useCarsData } from "../context/Provider";
import { useEffect } from "react";
import { ModelHero } from "../components/ModelHero";
import Slide from "../components/Slide";

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
  console.log(slideData && slideData);
  return (
    <section className="w-full py-5 h-full mx-auto ">
      <ModelHero
        name={name}
        img={photo}
        description={description}
        title={title}
      />
      <Slide data={slideData} />
    </section>
  );
};

export default Model;
