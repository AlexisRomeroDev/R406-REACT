function Like(){

const sayHello = () => {
  console.log("hello")
}

  return <span onClick={sayHello}><button>Like</button></span>
}

function MyApp() {

  const handleClick = () => {
    console.log('click sur le titre')
  }

     return (
      <div>     
        <h1 onClick={handleClick}>Hello, world!</h1>
        <Like/>
      </div>
     )     
   }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);