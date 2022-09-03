// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const mensaje = "Probando"
  const estilos = {
    backgroundColor:"#888",
    padding: "20px"
  }
  
  return (
    <body>
    <header>
      <ItemListContainer/>
    </header>

    <div className="container">
      <nav>
        <NavBar/>
      </nav>

      <h3 style={ estilos }>
        { mensaje }
      </h3>
    </div>
    </body>
  );
}

export default App;