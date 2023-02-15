
// Définition de classe qui hérite de la classe React Component

class Timer extends React.Component {

    // Le constructeur obligatoire

    constructor(){

        // L'appel du constructeur parent obligatoire

        super()

        this.value = 3 

        this.timer = setInterval(()=>{ 
            
            this.value -=1
    
            if(this.value == 0){    
                
                clearInterval(this.timer)
            }

            // Enregistrement de la valeur dans le State du composant : obligatoire !

            this.setState({state:this.value}) 
    
        }, 1000)

    }

    render(){

        return this.value > 0 ? (
            <div>{this.value}</div>
        ):(
            <div>Stop</div>
        )
    }
}

// A Savoir :

// 

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Timer />);