import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  //Aplicando metodo para llamar a la API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      //Error en caso de no cargar los usuarios
      .catch(() => setError("Error al cargar usuarios"));
  }, []);

  return (
    <div className="text-center text-xl">
      <h2 className="text-2xl mb-4">Lista de Usuarios</h2>
      {error && <p className="text-red-500">{error}</p>}
      {/* lista de usuarios y correos */}
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2">
            {user.name} - {user.email}
            {/* Boton para ver las publicaciones de usuarios */}
            <Link to={`/user/${user.id}`} className="ml-2 text-blue-500">Ver publicaciones</Link>
          </li>
        ))}
      </ul>
      {/* ***************************** */}
    </div>
  );
}

export default Users;
