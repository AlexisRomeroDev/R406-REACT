class User extends React.Component {

    constructor(){
        super()
        this.state = {
            logged: false
        }
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
        return <User />
    }
}



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);