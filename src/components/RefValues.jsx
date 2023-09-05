import { useRef, useEffect } from "react";

const RefValues = () => {
  // el contador parte en 0 y se incrementa en 1 cada vez que se renderiza el componente
  const count = useRef(0);
  //el contador no cambia en useEffect al cargar el componente por primera vez
  // pero si cambia en useEffect cuando se actualiza el componente
  useEffect(() => {
    count.current = count.current + 1;
    console.log(`El valor de count es: ${count.current}`);
  }, []);

  return <div>Contador: {count.current}</div>;
};

export default RefValues;
