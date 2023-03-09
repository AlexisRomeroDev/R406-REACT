function Button(){

    function handleClick(){
        console.log('click')
    }

    return (
        <div>
            {/* Fonction de callback */}
            <button onClick={handleClick}>Cliquer ici</button>

            {/* Fonction inline */}
            <button onClick={() => console.log('click')}> Click me!</button>
        </div>
    )
}

function App() {

    return (
        <Button/>
    )
}

// A Savoir : 
// - Les méthodes et les propriétés JSX sont CamelCase
// - Ne pas mettre de parenthèse après le nom de la fonction de callback


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);