import { removeHTMLTags } from "./ModelHero";
const Highlights = ({ data, side = true }) => {
  return (
    <article
      className={`flex-col lg:w-8/12 lg:mt-20 flex gap-5 lg:gap-32 px-2 ${
        side ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <img
        src={data?.image}
        alt={data?.title}
        className="object-contain rounded-xl"
      />
      <div className="flex flex-col lg:w-5/12 gap-2 lg:gap-5">
        <h2 className="text-[20px] font-bold">{data?.title}</h2>
        <h4>{removeHTMLTags(data?.content)}</h4>
      </div>
    </article>
  );
};

export default Highlights;
