import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPosts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  //Usando metodo para llamar a la API y ver las publicaciones
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      //Error en caso de no cargar las publicaciones
      .catch(() => setError("Error al cargar publicaciones"));
  }, [id]);

  return (
    <div className="text-center text-xl">
      <h2 className="text-2xl mb-4">Publicaciones del Usuario</h2>
      {error && <p className="text-red-500">{error}</p>}
      {/* lista de las publicaciones de usuarios */}
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-4 border p-2">{post.title}</li>
        ))}
      </ul>
      {/* ************************************** */}
    </div>
  );
}

export default UserPosts;
