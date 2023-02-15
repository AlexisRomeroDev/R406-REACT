
class App extends React.Component {

    render(){
        return <h1>Hello World !</h1>
    }
}

// A savoir :
// Pour manipuler le State on doit utiliser (temporairement) la syntaxe objet. 
// Lorsque nous aurons abordé les Hooks de REact, nous pourrons manipuler le state avec la syntaxe de fonction.

// Notez les similitudes entre la programmation fonctionnelle et la programmation objet : 
// La fonction render utilisée pour l'affichage 

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);