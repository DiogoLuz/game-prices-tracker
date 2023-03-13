import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="bg-navbarbgColor">
      <h1 className="py-2 text-center text-2xl text-white">
        Game Price Tracker
      </h1>
    </nav>
  );
}

export default Navbar;
