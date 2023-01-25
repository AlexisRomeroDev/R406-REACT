function Like(props){

const sayHello = () => {
  console.log(props.post.id)
}

  return <span onClick={sayHello}><button>Like</button></span>
}

function MyApp() {

     return (
      <div>     
        <h1>Like this !</h1>
        <Like post={{'id': 1}} />
      </div>
     )     
   }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);