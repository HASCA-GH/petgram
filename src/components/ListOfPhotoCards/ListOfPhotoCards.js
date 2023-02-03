import React from 'react'
import PhotoCard from '../PhotoCard/PhotoCard'

import { useQuery, gql } from '@apollo/client';

// const withPhotos = gql`
//   query getPhotos {
//     photos {
//       id
//       categoryId
//       src
//       likes
//       userId
//       liked
//     }
//   }
// `



// const ListOfPhotoCards = ({ data: { photos = [] } } = {}) => {
const ListOfPhotoCards = ({categoryId}) => {

  const withPhotos = gql`
    query getPhotos ($categoryId: ID) {
      photos (categoryId: $categoryId ){
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId },
  });

  // const { loading, error, data } = useQuery(withPhotos);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
         {data.photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)
        }
    </ul>
  )
}
// const ListOfPhotoCards = () => {
//   const { loading, error, data } = useQuery(withPhotos);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

//   return (
//     <ul>
//          {data.photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)
//         }
//     </ul>
//   )
// }
  
// const ListOfPhotoCardsComponent=({data:{photos=[]}}={})=>{return(<ul>{photos.map(photo=><PhotoCard key={photo.id}{...photo}/>)}</ul>)}
// export const ListOfPhotoCards=withPhotos(ListOfPhotoCardsComponent)

export default ListOfPhotoCards
