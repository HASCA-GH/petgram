import React from 'react'
import Layout from '../components/Layout/Layout'
// import { Helmet } from 'react-helmet'
import { ListOfCategories } from '../components/ListOfCategories'
import ListOfPhotoCards from '../components/ListOfPhotoCards/ListOfPhotoCards'

const Home = ({id}) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de ammimales domésticos muy bonitos'>
      {/* <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta 
          name='description' 
          content='Con Petgram puedes encontrar fotos de ammimales domésticos muy bonitos'/>
      </Helmet> */}
      <ListOfCategories/>
      <ListOfPhotoCards categoryId={id}/>
    </Layout>
  )
}

export default Home