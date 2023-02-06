import React from 'react'
import Context from '../Context'

const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({activateAuth}) =>{
          return (
            <form onSubmit={activateAuth}>
              <button>Iniciar Sesión</button>
            </form>
          )
        }
      }
    </Context.Consumer>
  )
}

export default NotRegisteredUser