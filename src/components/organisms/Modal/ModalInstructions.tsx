import React from "react";
// import { Cube } from "../../atoms";

const ModalInstructions = () => {
  return (
    <div className="w-full">
      <p className="mb-2">Adivina la palabra oculta en cinco intentos.</p>
      <p className="mb-2"> Cada intento debe ser una palabra válida de 5 letras.</p>
      <p className="mb-2">
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </p>

      <h3>Ejemplos</h3>

      {/* <Cube color="green" asciiCode={71}/>
      <Cube color="white" asciiCode={65}/>
      <Cube color="white" asciiCode={84}/>
      <Cube color="white" asciiCode={79}/>
      <Cube color="white" asciiCode={83}/> */}
      
    </div>
  );
};

export default ModalInstructions;
