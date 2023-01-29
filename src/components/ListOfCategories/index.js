import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles';
// import data from '../../db.json';

// Custom Hook useCategoriesDate. Ojo un Hook siempre tiene que devolver algo por ende utilizamos el return:
const useCategoriesData = () => {
  const [categories,setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    fetch('https://dgotv2-server.vercel.app/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response)
      setLoading(false)
    })
  }, [])

  return {categories, loading}

}

export const ListOfCategories = () => {
  const {categories, loading} = useCategoriesData()
  const [showFixed,setShowFixed] = useState([false])


  useEffect(() => {
    const  onScroll = e => {
      const newShowFixed = window.scrollY > 200

      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    
    document.addEventListener('scroll', onScroll)

    return ()=> document.removeEventListener('scroll', onScroll)
    
  }, [showFixed])
  

  const renderList = (fixed) => (
    // <List fixed={fixed}>
    //   {categories.map(category => 
    //       <Item key={category.id}>
    //           <Category 
    //               cover={category.cover}
    //               path={category.path}
    //               emoji={category.emoji}
    //           />
    //       </Item>)
    //   }
    // </List>
    <List fixed={fixed}>
      {
        loading 
          // ? <Item key={loading}>Cargando ...<Category/></Item>
          // ? <Item key={loading}><div className='xxx' style={{backgroundColor: "red"}}>Cargando ...</div></Item>
          ? <Item key={loading}>
              <div class="lds-hourglass"></div>
              <div class="lds-hourglass"></div>
              <div class="lds-hourglass"></div>
              <div class="lds-hourglass"></div>
            </Item>
          : categories.map(category => 
            <Item key={category.id}>
              <Category 
                  cover={category.cover}
                  path={category.path}
                  emoji={category.emoji}
              />
            </Item>)
      }
    </List>
  )

  // if (loading) {
  //   return 'Cargando .....'
  // }
  return (
    <>
      {/* {loading ? 'Cargando ... ' : ''} */}
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

// [1, 2, 3, 4].map(category => 
//     <Item key={category}>
//         <Category/>
//     </Item>)
