import { useEffect, useState } from "react";

const CarCard = ({ name, year, price, img }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isBigger, setIsBigger] = useState(false);

  useEffect(() => {
    const imgElement = document.getElementById(`car-image-${name}`);
    console.log(imgElement?.offsetHeight);
    if (imgElement && imgElement.offsetHeight > 200) {
      setIsBigger(true);
    }
  }, [name]);

  return (
    <article className="w-full h-full flex flex-col items-center justify-center mb-4">
      <h3 className="font-bold text-3xl pb-2">{name}</h3>
      <div className="flex flex-row w-5/12 text-bold justify-around items-center">
        <p>{year}</p>
        <div className="w-[0.5px] h-5 bg-black"></div>
        <p>${price.toLocaleString()}</p>
      </div>
      <div
        className="w-10/12"
        style={{ visibility: imageLoaded ? "visible" : "hidden" }}
      >
        <img
          id={`car-image-${name}`}
          src={img}
          alt={name}
          onLoad={() => setImageLoaded(true)}
          className={`${isBigger ? "-mt-12" : ""}`}
        />
      </div>
    </article>
  );
};

export default CarCard;
