import React from 'react'
// import {PhotoCard} from '../components/PhotoCard/PhotoCard'

import { Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client';
import PhotoCard from '../components/PhotoCard/PhotoCard';

const GET_SINGLE_PHOTO = gql`
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

// Aquí aplica render props: el padre pasa una arrow function con parametros y esta function retorna un componente que se renderiza basado en los parametros
const renderProp = 
({loading, error, data})=> {
    if (loading) return <p>Loading... </p>
    if (error) return <p>Error!</p>

    const {photo= {}} = data || { photo: {} };
    return <PhotoCard {...photo}/>
}
const PhotoCardWithQuery = ({id}) => {
    return (
        <Query query={GET_SINGLE_PHOTO} variables={{id}}>
        {
            renderProp
        }
    </Query>
  )
}

export default PhotoCardWithQuery