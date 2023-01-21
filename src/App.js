import { ListOfCategories } from './components/ListOfCategories';
import ListOfPhotoCards from './components/ListOfPhotoCards/ListOfPhotoCards';
import { Logo } from './components/Logo/Logo';
// import PhotoCard from './components/PhotoCard/PhotoCard';

import { GlobalStyle } from './styles/GlobalStyles';


function App() {
  return (
    <div >
        <GlobalStyle/>
        <Logo/>
        <ListOfCategories/>
        {/* <PhotoCard /> */}
        <ListOfPhotoCards/>
    </div>
  );
}

export default App;
