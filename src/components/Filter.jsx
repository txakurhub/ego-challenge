import { useState } from "react";

const Filter = ({ segment, setSegment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSegment(option);
    toggleMenu();
  };
  return (
    <div className="relative inline-block text-left w-5/12 lg:w-full bg-white z-10">
      <div className="lg:hidden">
        <button
          type="button"
          className="inline-flex justify-start w-full font-bold pl-2 ml-2 py-2 bg-white text-xs lg:text-xl"
          id="dropdown-menu"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          Filtrar por
          {isOpen ? (
            <p className="rotate-90 px-2 w-10 -scale-y-150 ">{` >`}</p>
          ) : (
            <p className="rotate-90 px-2 w-10 -scale-y-150 ">{` <`}</p>
          )}
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-full ml-2 rounded-md shadow-lg bg-white text-[10px] pl-2 lg:text-xl shadow-xl"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className={`block py-2 text-black pl-2 border-line border-b-[1px] ${
                segment === "Todos" && "bg-selected"
              }`}
              role="menuitem"
              onClick={() => handleOptionClick("Todos")}
            >
              Todos
            </a>
            <a
              href="#"
              className={`block py-2 text-black pl-2 border-line border-b-[1px] ${
                segment === "Autos" && "bg-selected"
              }`}
              role="menuitem"
              onClick={() => handleOptionClick("Autos")}
            >
              Autos
            </a>
            <a
              href="#"
              className={`block py-2 text-black pl-2 border-line border-b-[1px] ${
                segment === "Pickups y Comerciales" && "bg-selected"
              }`}
              role="menuitem"
              onClick={() => handleOptionClick("Pickups y Comerciales")}
            >
              Pickups y Comerciales
            </a>
            <a
              href="#"
              className={`block py-2 text-black pl-2 ${
                segment === "SUVs" && "bg-selected"
              }`}
              role="menuitem"
              onClick={() => handleOptionClick("SUVs")}
            >
              SUVs y Crossovers
            </a>
          </div>
        </div>
      )}
      {/* 1024 */}
      <div className="hidden lg:flex flex-row gap-10 text-xl w-full">
        <h4 className="font-bold py-2 bg-white">Filtrar por</h4>
        <div className="flex flex-row gap-14 w-10/12 px-5">
          <button
            className={`${
              segment === "Todos" && "bg-selected rounded-full"
            } px-5`}
            onClick={() => setSegment("Todos")}
          >
            Todos
          </button>
          <button
            className={`${
              segment === "Autos" && "bg-selected rounded-full"
            } px-5`}
            onClick={() => setSegment("Autos")}
          >
            Autos
          </button>
          <button
            className={`${
              segment === "Pickups y Comerciales" && "bg-selected rounded-full"
            } px-5`}
            onClick={() => setSegment("Pickups y Comerciales")}
          >
            Pickups y Comerciales
          </button>
          <button
            className={`${
              segment === "SUVs" && "bg-selected rounded-full"
            } px-5`}
            onClick={() => setSegment("SUVs")}
          >
            SUVs y Crossovers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
