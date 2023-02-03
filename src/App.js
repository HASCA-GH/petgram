import { ListOfCategories } from './components/ListOfCategories';
import ListOfPhotoCards from './components/ListOfPhotoCards/ListOfPhotoCards';

// import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards';

import { Logo } from './components/Logo/Logo';
// import PhotoCard from './components/PhotoCard/PhotoCard';

import { GlobalStyle } from './styles/GlobalStyles';


function App() {

  // Detectamos por parámetros de la URL el valor que se sale en la URL
  // http://localhost:3001/?details=5
  // En este caso el parámetro details tiene valor de 5
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('details')
  console.log('Aquí va:', detailId)

  return (
    <div >
        <GlobalStyle/>
        <Logo/>
        <ListOfCategories/>
        {/* <PhotoCard /> */}
        <ListOfPhotoCards categoryId={2}/>
    </div>
  );
}

export default App;
