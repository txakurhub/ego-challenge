import { useState } from "react";

const Filter = ({ segment, setSegment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSegment(option);
  };
  return (
    <div className="relative inline-block text-left w-5/12">
      <div>
        <button
          type="button"
          className="inline-flex justify-start w-full font-bold rounded-md border border-gray-300 shadow-sm  pl-2 ml-2 py-2 bg-white text-xs hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
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
          className="absolute left-0 mt-2 w-full ml-2 rounded-md shadow-lg bg-white text-[10px] pl-2"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => handleOptionClick("Todos")}
            >
              Todos
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => handleOptionClick("Autos")}
            >
              Autos
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => handleOptionClick("Pickups")}
            >
              Pickups y Comerciales
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => handleOptionClick("SUVs")}
            >
              SUVs y Crossovers
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
