import "./MyInfo.css"

//function MyInfo({ propertyReceivingData }  ) {
function MyInfo( props ) {

    const isEmpty = false;

    const secondList = true;

    const liElement = <li>USA</li>;   // ligne de code JS car pas dans le return

    const countryName = "Thailande";

    const tableauElements = [1, 2, 3];
    const elementsMap = tableauElements.map(i => <p> { i } </p>);

    const counter = 3;

    const styles = {
        color: "#F00",
        backgroundColor: "#0F0",
        fontSize: "1.2rem"   // si je veux des pixels en unité, je peux simplement écrire le nombre de pixel en type nombre
    }

    if (isEmpty) {
        return <p>Il n'y a pas de données à afficher</p>;
    }

    return (
        <div className="someClass">
                <h2>Adrien</h2>
                <p style={styles}>Ma liste de destination de voyage :</p>
                { !secondList && <ul>
                    <li>Nouvelle Zelande</li>
                    <li>Australie</li>
                    <li>Chili</li>
                    { liElement /* ligne JS (entre accolades)*/}           
                </ul>  }

                {secondList && <ul>
                    <li>Chypre</li>
                    {/* <li> { propertyReceivingData } </li> */}
                    <li> { props.propertyReceivingData } </li>
                    <li> { `J'aimerai aussi aller en ${countryName}` } </li>
                    { liElement /* ligne JS (entre accolades)*/}           
                </ul>
                }
                <p>nombre de destinations: {counter + 1}</p>

                { elementsMap }

                { props.state }

                <button onClick={props.increase} > + </button>
                <button onClick={props.decrease} > - </button>
            
        
        </div>
    );
}

export default MyInfo;