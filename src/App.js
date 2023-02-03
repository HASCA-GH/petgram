import { ListOfCategories } from './components/ListOfCategories';
import ListOfPhotoCards from './components/ListOfPhotoCards/ListOfPhotoCards';

// import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards';

import { Logo } from './components/Logo/Logo';
// import PhotoCard from './components/PhotoCard/PhotoCard';

import { GlobalStyle } from './styles/GlobalStyles';


function App() {

  // Detectamos por parámetros de la URL el valor que se sale en la URL
  // http://localhost:3001/?detail=5
  // En este caso el parámetro detail tiene valor de 5
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log('Aquí va:', detailId)

  return (
    <div >
        <GlobalStyle/>
        <Logo/>
        {detailId 
          ? <h1>Detaild ID {detailId}</h1>
          : <>
              <ListOfCategories/>
              {/* <PhotoCard /> */}
              <ListOfPhotoCards categoryId={6}/>
            </>
        }
        
    </div>
  );
}

export default App;
