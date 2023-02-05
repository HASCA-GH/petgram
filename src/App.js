import { Router } from '@reach/router';
// import { ListOfCategories } from './components/ListOfCategories';
// import ListOfPhotoCards from './components/ListOfPhotoCards/ListOfPhotoCards';

// import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards';

import { Logo } from './components/Logo/Logo';
import PhotoCardWithQuery from './container/PhotoCardWithQuery';
import Home from './pages/Home';
import Detail from './pages/Detail';


import { GlobalStyle } from './styles/GlobalStyles';
import NavBar from './components/NavBar/NavBar';


function App() {

  // Detectamos por parámetros de la URL el valor que  sale en la URL
  // http://localhost:3001/?detail=5
  // En este caso el parámetro detail tiene valor de 5
  // Esto ya no se usó porque se usó el React router:
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  // console.log('Aquí va:', detailId)

  return (
    <div >
        <GlobalStyle/>
        <Logo/>
        <Router>
              <Home path='/'/>
              <Home path='/pet/:id'/>
              <Detail path='/detail/:detailId'/>
        </Router> 
        <NavBar/>

    </div>
  );
}

export default App;
