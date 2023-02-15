
      // function MyApp() {
      //   return <h1>Hello, world!</h1>
      // }


      function MyApp() {

        const date = new Date();
        console.log(date.getHours())

        return (
          <div>

            <h1>Hello, world !</h1>
            <p>Il est {date.getHours()}h !</p>

          </div>
          
        )
      }

      // A SAVOIR

      // • L’utilisation de code JSX nécéssite l’utilisation du protocole HTTP. 
      // • un seul élément parent peut être retourné
      // • les accolades sont utilisées pour encadrer le code js
      // • utiliser des parenthèses autour du code retourné
      // • les commentaires : {/* ...*/}

      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<MyApp />);