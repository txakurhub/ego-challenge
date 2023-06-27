const CarCard = ({ name, year, price, img }) => {
  return (
    <article className="w-full h-full flex flex-col items-center justify-center pb-10">
      <h3 className="font-bold text-3xl py-3">{name}</h3>
      <div className="flex flex-row w-5/12 text-bold justify-around items-center">
        <p>{year}</p>
        <div className="w-[0.5px] h-5 bg-black"></div>
        <p>${price.toLocaleString()}</p>
      </div>
      <img src={img} alt={name} className="w-10/12" />
    </article>
  );
};

export default CarCard;
