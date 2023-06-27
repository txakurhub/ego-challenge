import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { removeHTMLTags } from "./ModelHero";
const Slide = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      loop={true}
      spaceBetween={0}
      className="w-full h-[410px] bg-slide relative"
      breakpoints={{
        1536: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 1,
        },
      }}
      navigation
      pagination={{ clickable: true }}
    >
      {data?.map((car, i) => (
        <SwiperSlide
          className=" w-full flex flex-col items-center pt-10 h-full"
          key={i}
        >
          <img
            src={car.image}
            alt={car.name}
            className="mb-5 w-[250px] lg:w-[294px] rounded-xl"
          />
          <div className="w-[250px] lg:w-[294px]">
            <h4 className="text-xl font-semibold mb-4">{car.name}</h4>
            <p className="text-md font-light">
              {removeHTMLTags(car.description).length > 90
                ? removeHTMLTags(car.description).substring(0, 87) + "..."
                : removeHTMLTags(car.description)}
            </p>
          </div>
        </SwiperSlide>
      ))}
      <div className="hidden md:flex opacity-30 bg-white left-0 h-[23.2rem] w-32 absolute bottom-0 z-10"></div>
      <div className="hidden md:flex opacity-30 bg-white right-0 h-[23.2rem] w-32 absolute bottom-0 z-10"></div>
    </Swiper>
  );
};

export default Slide;
