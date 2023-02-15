function Address({value}){  

  return <p>{value}</p>
}

function MyApp() {

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

  // const domains = new Set()
  // addresses.forEach(address => {
  //   const domain = address.split("@")[1]
  //   domains.add(domain)
  // })
  
  // console.log(domains)

  return (
    <div>     
    <h1>Liste d'email</h1>

    {addresses.map((address)=>{
      return (
        <Address key={address} value={address} />
        )
      })}
      
      </div>
      ) 
      
    }

    // A Savoir :
    // Boucler sur une liste d’éléments
    // méthode .map()
    // propriété key obligatoire
    
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(<MyApp />);