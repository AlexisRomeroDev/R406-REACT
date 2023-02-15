class Switch extends React.Component{

    constructor(props){
        super(props)

        this.value = 'On'
        this.state = {msg : this.value } // Définition de l'objet 
    }

    handleClick(){
        this.value = this.value == 'On' ? 'Off' : 'On'
        this.setState({msg : this.value }) // Mise à jour
        
    }

    render(){
        return (
            <div>
                {/* Affichage */}
                <button onClick={this.handleClick.bind(this)} >{this.state.msg}</button> 
           </div>
        )
    }
}

class App extends React.Component {

    render(){
        return (
            <Switch/>
        )
    }
    
}

// A Savoir : 
// Bind this
// this.setState()


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);