import logo from './logo.svg';
import './App.css';
import MyInfo from "./components/MyInfo";
import { useState, useEffect } from "react";


// class App() {}


/* Quand le composant est rendu par une fonction on l'appelle Composant Fonctionnel*/
function App() {

  const [state, setState] = useState(0);

  function increase() {
    //setState(1);
    setState(prevState => prevState + 1);
  }

  function decrease() {
    setState(prevState => prevState - 1)
  }
 



  const dataToPass = "Irlande";

  return (
    <div className="App"> { /* JS dans la paire d'accolades et JSx a l'extérieur des accolades*/ }
    {/* pour écrire un commentaire dans la partie JSX du fichier, il faut l'enturer d'accolades */}

    {/* <button onClick={increase} > + </button>
    <button onClick={decrease} > - </button> */}
      { state }
      <MyInfo propertyReceivingData={dataToPass} state={state} setState={setState} increase={increase} decrease= {decrease} />
    </div>
    //<div></div>
  );
}

export default App;
