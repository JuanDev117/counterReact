import React, { useState } from 'react';
import HijoBoton from './componetnes/boton.jsx';

function ListaTarea() {
 

    const [tarea,setTarea] = useState([]);
    const [tareaN,setNuevatarea] = useState("");

    const AgregaTarea = () => {
      if (tareaN.trim() !== "") { 
        setTarea([...tarea, tareaN.trim()]); 
        setNuevatarea(""); 
           }
    };
        
       
  return (
    <>
    <div className='Contenedor'>
      <h1 className='h1'>Lista de tareas</h1>
        <input type='text 'placeholder="que deseas hacer hoy" 
         value={tareaN} onChange={(evento) =>(
          setNuevatarea(evento.target.value)
         )}/> 

         <HijoBoton  className="hijo"Agregar={AgregaTarea}/>
        <ul>
          {tarea.map((tarea, index) => (
            <li key={index}> {tarea} </li>
          ))}
       </ul>

       </div>  
              
    </>
  
  );
}

export default ListaTarea;