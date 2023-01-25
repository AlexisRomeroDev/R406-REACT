class LikeWithBind extends React.Component{

    constructor(props){
        super(props)
    }

    sayHello(){
      console.log(this.props)
    }

    render(){

        // Appel de la méthode this.sayHello + Bind

        return <span onClick={this.sayHello.bind(this)}><button>Like</button></span>
    }
    
      
}

class LikeWithOutBind extends React.Component{

    constructor(props){
        super(props)
    }

    // Syntaxe spécifique avec fonction fléchée

    sayHello = () => {
      console.log(this.props)
    }

    render(){

        return <span onClick={this.sayHello}><button>Like</button></span>
    }
    
      
}
    
function MyApp() {

        return (
        <div>     
        <h1>Like this !</h1>
        <LikeWithBind post={{'id': 1}} />
        <LikeWithOutBind post={{'id': 1}} />
        </div>
        )     
    }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);