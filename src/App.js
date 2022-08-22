
import "./App.css";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App(props) {

  return (
    <div>
      <nav className="header">
        <NavBar/>
        <ItemListContainer greeting={'Welcome dear Panda Lover!'}/>
      </nav>
      <hr></hr>
    </div>
  );
}

export default App;
