import {useEffect, useState} from 'react'

const EffectWhitDependences = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Efecto con dependencias ejecutado')
  }, [count])

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  )
}

export default EffectWhitDependences