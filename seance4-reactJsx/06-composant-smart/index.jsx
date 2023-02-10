function Alert({type}){

  const types = {
    'danger' : {'color': 'red'},
    'info': {'color': 'blue'}
  }

  // console.log(types[type].color)

  return <button className={types[type].color}>{type}</button>
}

function MyApp() {

     return (
      <div>     
        <h1>Des boutons colorés</h1>
        <Alert type="info"/>
        <Alert type="danger"/>
      </div>
     )     
   }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);