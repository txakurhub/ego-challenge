import { useEffect, useState } from "react";
import logo from "../assets/Logo.svg";
import x from "../assets/x.svg";
import { useNavigate } from "react-router-dom";
const Navbar = ({ section, setSection }) => {
  const [active, setActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    section === 0 ? setActive(true) : setActive(false);
  }, [section]);
  return (
    <nav className="flex flex-row  justify-between items-center px-3 h-16 relative">
      <div className="flex flex-row gap-5 border-b-2 border-line w-full">
        <img src={logo} alt="logo" className="mr-10" />
        <div className="hidden lg:flex flex-row gap-10 items-end">
          <button
            className={`${
              active ? "border-active text-active" : "border-transparent"
            } text-xl border-b-4 py-3`}
            onClick={(e) => {
              e.preventDefault(), setActive(true), setSection(0), navigate("/");
            }}
          >
            Modelos
          </button>
          <button
            className={`${
              !active ? "border-active text-active" : "border-transparent"
            } text-xl border-b-4 py-3`}
            onClick={(e) => {
              e.preventDefault(), setActive(false), setSection(1);
            }}
          >
            Ficha de modelo
          </button>
        </div>
      </div>

      {/* Botón hamburguesa */}
      <div className="z-50 w-6/4" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bg-black w-[28px] h-[2.86px] mt-1.5`}></div>
        <div className={`bg-black w-[28px] h-[2.86px] mt-1.5`}></div>
        <div className={`bg-black w-[28px] h-[2.86px] mt-1.5`}></div>
        {/* Menú hamburguesa */}
        <div
          className={`flex flex-col text-lg items-end justify-end w-96 burger bg-white text-black duration-400 absolute top-16 right-0 px-5 ${
            isOpen ? "opacity-100" : "hidden opacity-0"
          }`}
        >
          <div className="flex flex-row items-center gap-3 pt-4 ">
            <p className="text-sm">Cerrar</p>
            <img src={x} alt="cerrar" className="w-[15px]" />
          </div>
          <div className="w-full text-end my-5 bg-white">
            <div className="flex flex-col gap-1 px-8">
              <h4>Modelos</h4>
              <h4>Servicios y Accesorios</h4>
              <h4>Financiación</h4>
              <h4>Reviews y Comunidad</h4>
            </div>
            <div className={`bg-line w-full h-[1px] right-0 my-5`}></div>
            <div className="flex flex-col gap-1 px-8">
              <h4>Toyota Mobility Service</h4>
              <h4>Toyota Gazoo Racing</h4>
              <h4>Toyota Híbridos</h4>
            </div>
            <div className={`bg-line w-full h-[1px] right-0 my-5`}></div>
            <div className="flex flex-col gap-1 px-8 pb-3">
              <h4>Concesionarios</h4>
              <h4>Test Drive</h4>
              <h4>Contacto</h4>
            </div>
            <div className="flex flex-col gap-1 bg-graybg -mx-5 px-[51px] pt-6 pb-10 -mb-10">
              <h4>Actividades</h4>
              <h4>Servicios al Cliente</h4>
              <h4>Ventas Especiales</h4>
              <h4>Innovación</h4>
              <h4>Prensa</h4>
              <h4>Acerca de..</h4>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
