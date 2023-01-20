import logo from './logo.svg';
// import {Category} from './components/Category';
import { ListOfCategories } from './components/ListOfCategories';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Category/> */}
        <ListOfCategories/>
    </div>
  );
}

export default App;
