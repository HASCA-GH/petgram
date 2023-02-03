import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"


// const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setValue] = useState(()=> {
//     try {
//       const item = localStorage.getItem(key)
//       return item !== null ? JSON.parse(item) : initialValue
//     } catch (error) {
//       return initialValue
//     }
//   })
  
//   const setLocalStorage = value => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value))
//       setValue(value)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return [storedValue, setLocalStorage]

// }

const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
  const [show, element] = useNearScreen()
  // const element = useRef(null)
  // const [show, setShow] = useState(false)
  const key = `like-${id}`
  // const [liked, setLiked] = useState(()=> {
  //   try {
  //     const like = localStorage.getItem(key)
  //     return like
  //   } catch (error) {
  //     return false
  //   }
  // })

  const [liked, setLiked] = useLocalStorage(key, false)


  // console.log(liked)
  // useEffect(() => {

  //   // Con el import dinámico debemos validar si el browser ya tiene l parche de  intersection-observer y en caso no lo tenga lo cargamos, por lo que validamos antes:

  //   Promise.resolve(
  //     typeof window.IntersectionObserver !== 'undefined' 
  //       ? window.IntersectionObserver
  //       // Este es un import dinámico: Solo se carga cuando se utiliza no siempre se carga
  //       : import('intersection-observer')
  //   ).then(()=> {
  //       const observer = new window.IntersectionObserver(
  //         (entries)=> {
  //           // OJO: el isIntersecting es lo que nos dice que el objeto se está mostrando en el viewport de la pantalla
  //           // console.log(entries)
  //           const {isIntersecting} = entries[0]
  //           // console.log(isIntersecting);
  //           if (isIntersecting) {
  //             // console.log('Si intersecting en el viewport..');
  //             setShow(true)
  //             // Evitar que el observer se vuelva a actualizar; ya que solo queremos que se actualice una sola vez. Entonces lo desconectamos:
  //             observer.disconnect()
  //           }
  //        })
        
  //         // console.log(element.current);
  //       observer.observe(element.current)
  //     })
  // }, [element])
  
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  // const setLocalStorage = value => {
  //   try {
  //     localStorage.setItem(key, value)
  //     setLiked(value)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // Esta instrucción aquí sale error por lo que se optó por ponerlo dentro del componente articulo; sino lo hacemos así se pierde referencia puesto que está en null
  // if (!show) return null
  
  return (
    // OJO: que estilamos article por Article para que tenga una altura minima en el viewport. Chequear el estilo
    // <article ref={element}>
    <Article ref={element}>
      {
        show  &&
        <>
            {/* <a href={`/details/${id}`}> */}
            <a href={`/?details=${id}`}>
              <ImgWrapper >
                  <Img src={src} alt="" />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
                <Icon size={'32px'}/>
                {likes} likes!
            </Button>
        </>
      }
    </Article>
  )
}

// MdFavoriteBorder

export default PhotoCard