import { useState } from "react";

function AppSwitch() {

    const [frase,setFrase] = useState(false);

    const swichLetras = () => {
        setFrase(!frase);
    };



 return(
    <>
    <div style={{background: frase ? "#000":"#fff", color:frase ? "#fff":"#000"}}>
     <h1>swich</h1>
     <p>Texto de prueba</p>
     <button onClick={swichLetras}>Cambiar a {frase ?"claro":"oscuro"}
     </button>
    </div>
    
    
    </>
  )
}
export default AppSwitch;