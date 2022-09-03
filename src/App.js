// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    <body className="background">
    <header>
      <ItemListContainer greeting={"La tienda mas famosa de todas las tiendas!"}/>
    </header>

    <div className="container">
      <nav>
        <NavBar/>
      </nav>
    </div>
    </body>
  );
}

export default App;