class User extends React.Component {

    // Cet exemple n'est pas très parlant. La modification du state avec setState ne fonctione que si this.state est déjà défini.
    // TODO : Trouver un autre exemple avec par exemple : un store qui a un state isOpen , en fonction de l'heure ...

    constructor(props){
        super(props)
        this.state= null
        this.setState({state:{logged:false}})
    }

    render(){
        return this.state.logged === true ? (
            <button>Logout</button>
        ):
        (
            <button>Login</button>
        )
    }
}

class App extends React.Component {

    render(){
        return <User logged={true} />
    }
}



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);