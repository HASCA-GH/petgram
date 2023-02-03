import { useEffect, useRef, useState } from 'react'

export const useNearScreen = () => {
    const element = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
    
        // Con el import dinámico debemos validar si el browser ya tiene l parche de  intersection-observer y en caso no lo tenga lo cargamos, por lo que validamos antes:
    
        Promise.resolve(
          typeof window.IntersectionObserver !== 'undefined' 
            ? window.IntersectionObserver
            // Este es un import dinámico: Solo se carga cuando se utiliza no siempre se carga
            : import('intersection-observer')
        ).then(()=> {
            const observer = new window.IntersectionObserver(
              (entries)=> {
                // OJO: el isIntersecting es lo que nos dice que el objeto se está mostrando en el viewport de la pantalla
                // console.log(entries)
                const {isIntersecting} = entries[0]
                // console.log(isIntersecting);
                if (isIntersecting) {
                  // console.log('Si intersecting en el viewport..');
                  setShow(true)
                  // Evitar que el observer se vuelva a actualizar; ya que solo queremos que se actualice una sola vez. Entonces lo desconectamos:
                  observer.disconnect()
                }
             })
            
              // console.log(element.current);
            observer.observe(element.current)
          })
      }, [element])
      return [show, element]
}