import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">Inicio</Link>
      <Link to="/users" className="text-lg font-bold">Usuarios</Link>
    </nav>
  );
}

export default Navbar;
