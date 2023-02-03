import React from 'react'
// import {PhotoCard} from '../components/PhotoCard/PhotoCard'

import { Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client';
import PhotoCard from '../components/PhotoCard/PhotoCard';

const query = gql`
    query getSinglePhoto($id:ID!) {
        photo(id:$id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`
const PhotoCardWithQuery = ({id}) => {
    return (
        <Query query={query} variables={{id}}>
        {
            // Aquí aplica render props: el padre pasa una arrow function con parametros y esta function retorna un componente que se renderiza basado en los parametros
            ({loading, error, data})=> {
                const {photo= {}} = data || { photo: {} };
                return <PhotoCard {...photo}/>
            }
        }
    </Query>
  )
}

export default PhotoCardWithQuery