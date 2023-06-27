import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarCard = ({ name, year, price, img, id, setSection }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setSection(id);
    navigate(`/model/${id}`);
  };
  return (
    <article
      className="w-full h-full flex flex-col items-center mb-4 relative duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3
        className={`font-bold text-3xl pb-2 ${
          isHovered ? "text-active" : "text-black"
        } duration-300`}
      >
        {name}
      </h3>
      <div className="flex flex-row w-5/12 text-bold justify-center gap-3 items-start">
        <p>{year}</p>
        <div className="w-[0.5px] h-5 bg-black"></div>
        <p>${price.toLocaleString()}</p>
      </div>
      <div className="w-8/12 h-full flex items-center justify-center">
        <img src={img} alt={name} className="object-cover" />
      </div>
      <button
        onClick={handleClick}
        className={`${
          isHovered ? "opacity-100" : "opacity-0"
        } mt-2 bg-black text-white hover:opacity-70 py-2 px-4 text-lg rounded-full w-6/12 duration-300 absolute bottom-0 left-0 right-0 mx-auto`}
      >
        Ver Modelo
      </button>
    </article>
  );
};

export default CarCard;
