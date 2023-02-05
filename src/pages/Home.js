import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import ListOfPhotoCards from '../components/ListOfPhotoCards/ListOfPhotoCards'

const Home = ({id}) => {
  return (
    <>
              <ListOfCategories/>
              <ListOfPhotoCards categoryId={id}/>
    </>
  )
}

export default Home