import { useState } from "react";

const Sort = ({ sorted, setSorted }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSorted(option);
    toggleMenu();
  };
  return (
    <div className="relative inline-block text-left w-5/12 z-30">
      <div>
        <button
          type="button"
          className="inline-flex justify-end w-full font-bold pr-2 mr-2 py-2 bg-white text-xs lg:text-xl"
          id="dropdown-menu"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          Ordenar por
          {isOpen ? (
            <p className="rotate-90 px-2 w-10 -scale-y-150 duration-300">{` >`}</p>
          ) : (
            <p className="rotate-90 px-2 w-10 -scale-y-150 duration-300">{` <`}</p>
          )}
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-full mr-2 rounded-md shadow-lg bg-white text-[10px] pr-2 lg:text-xl duration-300 shadow-xl"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className={`block py-2 text-black pl-2 border-line border-b-[1px] ${
                sorted === "cheapest" && "bg-selected"
              }`}
              role="menuitem"
              onClick={() => handleOptionClick("cheapest")}
            >
              De <b>menor</b> a <b>mayor</b> precio
            </a>
            <a
              href="#"
              className={`block py-2 text-black pl-2 border-line border-b-[1px] ${
                sorted === "expensive" && "bg-selected"
              }`}
              role="menuitem"
              onClick={() => handleOptionClick("expensive")}
            >
              De <b>mayor</b> a <b>menor</b> precio
            </a>
            <a
              href="#"
              className={`block py-2 text-black pl-2 border-line border-b-[1px] ${
                sorted === "newer" && "bg-selected"
              }`}
              role="menuitem"
              onClick={() => handleOptionClick("newer")}
            >
              Más <b>nuevos</b> primero
            </a>
            <a
              href="#"
              className={`block py-2 text-black pl-2 ${
                sorted === "older" && "bg-selected"
              }`}
              role="menuitem"
              onClick={() => handleOptionClick("older")}
            >
              Más <b>viejos</b> primero
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;
