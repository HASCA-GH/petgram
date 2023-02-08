import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';
// import { ListOfCategories } from './components/ListOfCategories';
// import ListOfPhotoCards from './components/ListOfPhotoCards/ListOfPhotoCards';

// import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards';
import { GlobalStyle } from './styles/GlobalStyles';
import NavBar from './components/NavBar/NavBar';

import { Logo } from './components/Logo/Logo';
// import PhotoCardWithQuery from './container/PhotoCardWithQuery';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favs from './pages/Favs';
import User from './pages/User';
import NotRegisteredUser from './pages/NotRegisteredUser';

import NotFound from './pages/NotFound';
import { Context } from './Context';
// import Context from './Context';

function App() {
  const {isAuth} = useContext(Context)
  
  // console.log({isAuth})
  // Detectamos por parámetros de la URL el valor que  sale en la URL
  // http://localhost:3001/?detail=5
  // En este caso el parámetro detail tiene valor de 5
  // Esto ya no se usó porque se usó el React router:
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  // console.log('Aquí va:', detailId)

  // OJO: Em una render props, el children es una función y como tal puede recibir parámetros
  // const UserLogged = ({children}) => {
  //   return children({isAuth: false})
  // }

  return (
    <div >
        <GlobalStyle/>
        <Logo/>
        <Router>
          
              <NotFound default />
              <Home path='/'/>
              <Home path='/pet/:id'/>
              <Detail path='/detail/:detailId'/>
              {!isAuth && <NotRegisteredUser path='/login' /> }
              {!isAuth && <Redirect noThrow from='/favs' to='/login' /> }
              {!isAuth && <Redirect noThrow from='/users' to='/login' /> }
              {isAuth && <Redirect noThrow from='/login' to='/' /> }

              <Favs path='/favs'/>
              <User path='/user'/>
              
        </Router> 
        {/* <Context.Consumer>
          {
            ({isAuth}) => 
            isAuth 
            ? 
              <Router>
                <Favs path='/favs'/>
                <User path='/user'/>
              </Router>
            :
              <Router>
                <NotRegisteredUser path='/favs'/>
                <NotRegisteredUser path='/user'/>
              </Router>
           }
        </Context.Consumer> */}
        <NavBar/>

    </div>
  );
}

export default App;
