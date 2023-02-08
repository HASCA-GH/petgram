import React from 'react'
import Layout from '../components/Layout/Layout'
import PhotoCardWithQuery from '../container/PhotoCardWithQuery'


const Detail = ({detailId}) => {
  return (
    // title={`Fotografía ${detailId}`}
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId}/>
    </Layout>
  )
}

export default Detail