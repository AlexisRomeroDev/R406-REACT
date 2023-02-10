function ColorBtn({color}){

  return <button className={color} style={{backgroundColor: color}}>{color}</button>
}

function MyApp() {

     return (
      <div>     
        <h1>Des boutons colorés</h1>
        <ColorBtn color="blue"/>
        <ColorBtn color="red"/>
      </div>
     )     
   }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);