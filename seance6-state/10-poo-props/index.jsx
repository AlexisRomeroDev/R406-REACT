
// Définition de classe qui hérite de la classe React Component

class Timer extends React.Component {

    // Le constructeur (pas) obligatoire

    constructor(props){

        // L'appel du constructeur parent obligatoire

        super(props)

        this.end = props.start *10

    }

    render(){        
        return (
            <div>
                <div>Start : {this.props.start}</div>
                <div>End : {this.end}</div>
            </div>
        )
    }
}

class App extends React.Component {

    render(){
        return <Timer start={10}/>
    }
}

// A Savoir

// On peut récupèrer les "props" d'un composant dans le constructeur de classe, et alors on les transmet obligatoirement au parent.
// Dans la fonction render : les props sont accessibles via this.props

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);