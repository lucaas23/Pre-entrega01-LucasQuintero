import React, {useState} from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0);
    
    function modificarContador(operacion) {
        if(operacion == "+") {
            setContador(contador + 1) //contador = contador + 1
        } else {
            if(contador > 1) {
                setContador(contador - 1)
            }
            
        }
    }
   
    return (
        <>
          
        </>
    );
}

export default Contador;