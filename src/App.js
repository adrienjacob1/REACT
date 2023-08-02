import logo from './logo.svg';
import './App.css';
import MyInfo from "./components/MyInfo"

// class App() {}


/* Quand le composant est rendu par une fonction on l'appelle Composant Fonctionnel*/
function App() {

  const dataToPass = "Irlande";

  return (
    <div className="App"> { /* JS dans la paire d'accolades et JSx a l'extérieur des accolades*/ }
    {/* pour écrire un commentaire dans la partie JSX du fichier, il faut l'enturer d'accolades */}
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section></section>
      <h2>Exemple</h2>
      <p></p>
      <MyInfo propertyReceivingData={dataToPass} />
    </div>
    //<div></div>
  );
}

export default App;
