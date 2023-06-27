import { useState } from "react";
// import logo from "../assets/";
const Navbar = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="flex flex-row border-[1px] border-line justify-between h-16">
      <div className="">
        <div className="">
          {/* <img src={logo} alt="logo" /> */}
        </div>
        <button
          className={`${active ? "border-b-4" : "border-b-0"} border-active`}
          onClick={(e) => {
            e.preventDefault(), setActive(true);
          }}
        >
          Modelos
        </button>
        <button
          className={`${!active ? "border-b-4" : "border-b-0"} border-active`}
          onClick={(e) => {
            e.preventDefault(), setActive(false);
          }}
        >
          Ficha de modelo
        </button>
      </div>
    </div>
  );
};

export default Navbar;
