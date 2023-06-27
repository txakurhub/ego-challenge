export function removeHTMLTags(text) {
  const divTemporal = document.createElement("div");
  divTemporal.innerHTML = text;
  return divTemporal.textContent || divTemporal.innerText || "";
}
export const ModelHero = ({ img, title, name, description }) => {
  const cleanDesc = removeHTMLTags(description);
  return (
    <div className="w-11/12 flex flex-col items-center justify-center lg:-mt-20 lg:px-5">
      <div className="w-11/12 flex flex-col lg:flex-row lg:gap-10 justify-center items-center">
        <img src={img} alt="" className="lg:w-6/12" />
        <div className="lg:w-5/12">
          <h4 className="text-xl font-semibold pb-3 lg:text-2xl ">{name}</h4>
          <h2 className="font-semibold text-3xl pb-3 lg:text-5xl ">{title}</h2>
          <p className="text-base text-justify lg:text-xl lg:py-5 lg:w-8/12">
            {cleanDesc}
          </p>
        </div>
      </div>
    </div>
  );
};
