function Button(){

    function handleClick(){
        console.log('click')
    }

    return (
        <button onClick={handleClick} type={'info'}>Cliquer ici</button>
    )
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Button />);