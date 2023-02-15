class Increase extends React.Component{

    constructor(props){
        super(props)

        this.state = {value:0} // Définition de l'objet
    }

    handleClick(){

        this.state.value ++

        this.setState(() => ({ 
            value: this.state.value  // Mise à jour
         }))
        
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick.bind(this)} >{this.state.value}</button>
           </div>
        )
    }
}

class App extends React.Component {

    render(){
        return (
            <Increase/>
        )
    }
    
}

// A Savoir : 
// Bind this
// 


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);