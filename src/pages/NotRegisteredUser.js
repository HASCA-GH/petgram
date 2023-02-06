import React from 'react'
import UserForm from '../components/UserForm/UserForm'
import Context from '../Context'

const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({activateAuth}) =>{
          return (
            <>
            <UserForm 
              title='Registrarse'
              onSubmit={activateAuth}/>
            <UserForm 
              title='Iniciar Sesión'
              onSubmit={activateAuth}/>
            </>
          )
        }
      }
    </Context.Consumer>
  )
}

export default NotRegisteredUser