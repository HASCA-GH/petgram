import { ListOfCategories } from './components/ListOfCategories';
import ListOfPhotoCards from './components/ListOfPhotoCards/ListOfPhotoCards';
// import PhotoCard from './components/PhotoCard/PhotoCard';

import { GlobalStyle } from './GlobalStyles';


function App() {
  return (
    <div >
        <GlobalStyle/>
        <ListOfCategories/>
        {/* <PhotoCard /> */}
        <ListOfPhotoCards/>
    </div>
  );
}

export default App;
