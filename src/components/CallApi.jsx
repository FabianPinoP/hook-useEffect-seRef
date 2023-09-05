import { useState, useEffect } from "react";

const CallApi = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Definir la URL de la API que deseas consumir
    const apiUrl = "https://ejemplo.com/api";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado con los datos de la API
        setData(data);
      })
      .catch((error) => {
        // Manejar errores de la solicitud
        console.error("Error al obtener datos de la API:", error);
      });
  }, []);

  return (
    <div>
      <h1>Datos de la API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
  
}

export default CallApi