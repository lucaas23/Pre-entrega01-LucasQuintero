import React, {useState} from 'react';
import Navbar from './content/Navbar';
import Form from './Form';
import Contador from './Contador';
import '../styles/App.css'
import Home from '../content/Home';

const App = () => {
  const [state, setstate] = useState(0);

    return (
        <>
          <Navbar contador={state}/>
          {
          //<Form busqueda="Buscar Usuario"/>
          }

          <Contador/>
          <Home/>
        
        </>
    );
}

export default App;