import React from "react";
import unispadelogo from "./images/unispadelogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="nav flex justify-between">
        <div className="logo flex w-full h-32 ">
          <img src={unispadelogo} alt="logo" className="w-40 " />
        </div>
        <div className="links flex justify-between py-12 lg:py-10 px-4 text-sm md:text-xl lg:text-xl text-sky-400 ">
          <Link to="/"  className="hover:text-orange-600">Design1</Link> | <Link to="/design2" className="hover:text-orange-600">Design2</Link> |{" "}
          <Link to="/design3" className="hover:text-orange-600">Design3</Link> |{" "}
          <Link to="/design4" className="hover:text-orange-600">Design4</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
