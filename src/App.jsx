import { useState } from 'react'
 





function Lista () {
  const [contador, setContador] = useState(0)

  const incrementar = () => { 

    setContador(contador + 1);
    console.log (contador);
  };

  const restar = () => {

    setContador(contador - 1);
    console.log (contador);
  };

  const reiniciar = () => {
    setContador(0);
  }; 
  

  const asignar = () => {
    setContador(100);
  };


  return (
    <>
    <div className="Contenedor">
      <div className="botones"> 
        <h1 className='numero'>{contador}</h1>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
      <div className="Asignar">
        <button onClick={asignar}>Asignar</button>
      </div>  
    </div>  
      
      
    </>
  )
}

export default Lista
