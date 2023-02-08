import React from 'react'
// import { Helmet } from 'react-helmet'
import Layout from '../components/Layout/Layout'
import { FavsWithQuery } from '../container/GetFavorites'

const Favs = () => {
  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
     {/* <Helmet>
        <title>Petgram - Tus favoritos</title>
        <meta 
          name='description' 
          content='Aquí puedes encontrar tus favoritos'/>
      </Helmet> */}
      {/* <h1>Favs</h1> */}
      <FavsWithQuery/>
    </Layout>
  )
}

export default Favs