
      function MyApp() {
        const now = new Date().getHours()
        
        return now > 18 ? (
              <p>Nous sommes fermés après 18h</p>
            ) :
            (
              <p>Nous sommes ouverts jusqu'à 18h</p>
            )        
      }

      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<MyApp />);