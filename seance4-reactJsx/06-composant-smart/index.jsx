function Btn({type}){

  const types = {
    'start' : {'color': '#B2DFDB'},
    'stop': {'color': '#FFCDD2'},
    'pause': {'color': '#FFCC80'},
    'play': {'color': '#B2DFDB'}
  }

  // console.log(types[type].color)

  return <button style={{backgroundColor: types[type].color}}>{type}</button>
}

function MyApp() {

  return (
  <div>     
    <h1>Des boutons colorés</h1>
    <Btn type="start"/>
    <Btn type="stop"/>
    <Btn type="play"/>
    <Btn type="pause"/>
  </div>
  )     
}

// A savoir :
// propriétés de style en camelCase
// rappels sur les objets litteraux, la notation pointée (accès aux propriétés statiques), la notation crochet (accès aux propriétés dynamiques) 

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);