function Btn({type}){

  // NB : Propriété type du composant Btn

  console.log(type)

  return <button className={type}>{type}</button>
}

function Counter({value}){
  return (
    <div>{value}</div>
  )
}

function MyApp() {

     return (
      <div>     
        <h1>Boutons</h1>
        <Btn type="start"/>
        <Btn type="stop"/>
        <Btn type="pause"/>
        <Btn type="play"/>
        <Counter value={0}/>
      </div>
     )     
   }

// A SAVOIR :

// Les propriétés d'un composant agissent comme les paramètres d’une fonction
// Syntaxes :
// - passer les propriétés de type "chaine", de type "number" (acollades obligatoires)
// - récupérer les propriétés. Pré-requis : la déstructuration : 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#d%C3%A9composer_les_propri%C3%A9t%C3%A9s_dobjets_pass%C3%A9s_en_arguments

// exemple : 
// let student = {
//   id:20,
//   name:'Alex',
//   age:20
// }
//   let {name,age} = student
//   console.log(name)
//   console.log(age)
// - utiliser les propriétés dans le composant NB : les accollades
// - l'attribut ClassName au lieu de class

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);