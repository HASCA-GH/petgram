
import { useQuery, gql } from '@apollo/client';

// const ListOfPhotoCards = ({ data: { photos = [] } } = {}) => {
export const useGetPhotos = (categoryId) => {

  const GET_PHOTOS = gql`
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
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

  return { loading, error, data }
}