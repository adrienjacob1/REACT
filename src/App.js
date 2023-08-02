import logo from './logo.svg';
import './App.css';
import MyInfo from "./components/MyInfo";
import { useState, useEffect } from "react";


// class App() {}


/* Quand le composant est rendu par une fonction on l'appelle Composant Fonctionnel*/
function App() {

  const [state, setState] = useState(0);

  const dataToPass = "Irlande";

  function increase() {
    //setState(1);
    setState(prevState => prevState + 1);
  }

  function decrease() {
    setState(prevState => prevState - 1)
  }

  useEffect(() => {
    //localStorage.setItem("state", state);
    increase();
    console.log("infinite loop!")
  }, []);  /* Il ne faut pas oublier soit [], soit [state] pour éviter une boucle infinie car sinon useEffect change le rendu, react s'en apercoit, recharge, on revient sur 
  useEffect qui modifie le rendu et ainsi de suite. La, useEffect ne va s'activer que si state change. On appelle ca un tableau de dépendance*/
 




  

  return (
    <div className="App"> { /* JS dans la paire d'accolades et JSx a l'extérieur des accolades*/ }
    {/* pour écrire un commentaire dans la partie JSX du fichier, il faut l'enturer d'accolades */}

    {/* <button onClick={increase} > + </button>
    <button onClick={decrease} > - </button> */}
      { state }
      <MyInfo propertyReceivingData={dataToPass} state={state} increase={increase} decrease= {decrease} />
    </div>
    //<div></div>
  );
}

export default App;
