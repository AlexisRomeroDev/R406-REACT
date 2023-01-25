class Address extends React.Component{ 
  
  constructor(props){
    super(props)
    this.props = props
  }

   // 3. On définit la méthode 
  handleItemRemoval = () => {
    
    // 4. On transmet this (L'adresse) en paramètre
    this.props.app.removeItem(this)
  }
  
  render(){
    return (
      <p>        
      <button 
      href="#" 
      style={{fontWeight: 'bold', fontFamily: 'sans-serif'}} 
      title="delete"

      // 2. On appelle la methode removeItem 
      // On bind le composant si nécessaire : this.handleItemRemoval.bind(this)
      
      onClick={this.handleItemRemoval}
      >X</button>
      &nbsp;
      <a href='#'>{this.props.value}</a>
      </p>
      )
    }   
}
  
class MyApp extends React.Component{
  
  constructor(props){
    super(props)
    const addresses = [
      "assunta.menendez277@yahoo.com",
      "dorethea_ernst@p.com",
      "lorie_bradbury51816@hotmail.com",
      "mitch_demers6@deeper.com",
      "ling58@yahoo.com",
      "veta-hooper65043@francis.com",
      "ferminaguerin1788@hub.com",
      "vivan_joseph9471@rise.arida.wakayama.jp",
      "golda-ledesma@nursery.com",
      "tyron-back@yahoo.com",
      "maryellen_emmons81@gmail.com",
      "vanessa7488@deferred.lib.al.us",
      "kenton-reece@contracts.com",
      "tailytle1736@hotmail.com",
      "romaine-osburn344@yahoo.com",
      "jacquesdelgado87903@hotmail.com",
      "danica38@cons.com",
      "vi.guillen@gmail.com",
      "katherin7@allan.aigo",
      "jonell-marlow78@yahoo.com",
      "margurite.aiello@hotmail.com",
      "monique-beatty@opened.com",
      "devon8676@lite.com",
      "inocencia_tomlinson25741@gmail.com",
      "kristyn4gmail.com",
      "talishabrice@yahoo.com",
      "joanne-hayes@duo.com",
      "ophelia611@org.com",
      "svetlana318@gmail.com",
      "taynarichardson24383@yahoo.com",
    ];
    this.state = {addresses}
  }
    
  // 5. On définit la méthode removeItem 
  removeItem = (itemToRemove)=> {

    // 6. On filtre les adresses en comparant chaque adresse à la props value du composant
    const addresses = this.state.addresses.filter(function(item){
      if (item != itemToRemove.props.value) return true
    })
    
    this.setState({addresses})

  }
  
  render(){
    return (
      <div>     
      <h1>Liste d'email</h1>
      
      {this.state.addresses.map((address)=>{
        return (
          
          // 1. On passe this à l'élément
          <Address key={address} value={address} app={this}/>
          )
        })}
        
        </div>
    )
  }
      
}
      
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<MyApp />);