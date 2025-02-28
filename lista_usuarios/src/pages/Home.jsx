import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center text-3xl mb-4">Bienvenido a la Aplicación</div>
      <div className="text-center text-lg max-w-md">
        <p>Esta aplicación te permite mostrar una lista de usuarios y ver sus publicaciones.</p>
        <p>La informacion de cada usuario esta siendo obtenida por medio de una API.</p>
      </div>
    </div>
  );
}

export default Home;