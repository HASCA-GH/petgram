import React, { useState } from 'react'
import useInputValue from '../../hooks/useInputValue'
import {Form, Input, Button, Title} from './styles'
// const useInputValue = initialValue => {
//     const [value, setValue] = useState(initialValue)
//     const onChange = e => setValue(e.target.value)

//     return {value, onChange}
// }

const UserForm = ({onSubmit, title}) => {
    // const [email,setEmail] = useState('')
    // const [password,setPassword] = useState('')
    const email = useInputValue('')
    const password = useInputValue('')

  return (
    <>
        <Title>{title}</Title>
        <Form onSubmit={onSubmit}>
            {/* <input 
                placeholder='Email'
                value={email.value}
                onChange={email.onChange} /> */}
            {/* Ojo con el res operator "...email" que implica utilizar todas las propiedades y métodos que están definidas en email. En otras palabras el value como el onChange pasarán como props al input, por lo que el anterior input comentado se simplifica de la forma:*/}
            <Input 
                placeholder='Email'
                {...email} />
            {/* <input 
                type="password"  
                placeholder='Password'
                value={password.value}
                onChange={password.onChange} /> */}
            {/* Ojo con el res operator "...password" que implica utilizar todas las propiedades y métodos que están definidas en password. En otras palabras el value como el onChange pasarán como props al input, por lo que el anterior input comentado se simplifica de la forma:*/}
            <Input 
                type="password"  
                placeholder='Password'
                {...password} />
            <Button>{title}</Button>
        </Form>
    </>
  )
}

export default UserForm