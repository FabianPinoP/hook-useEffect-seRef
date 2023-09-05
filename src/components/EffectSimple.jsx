import { useEffect } from "react";

const EffectSimple = () => {
  useEffect(() => {
    console.log('Efecto ejecutado sin dependencias')
  })

  return <div>EffectSimple</div>;
};

export default EffectSimple;
