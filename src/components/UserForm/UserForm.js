import React from 'react'
import useInputValue from '../../hooks/useInputValue'
import SubmitButton from '../SubmitButton/SubmitButton'
import {Error, Form, Input, Title} from './styles'


// const useInputValue = initialValue => {
//     const [value, setValue] = useState(initialValue)
//     const onChange = e => setValue(e.target.value)

//     return {value, onChange}
// }

const UserForm = ({error, disabled, onSubmit, title }) => {
    // const [email,setEmail] = useState('')
    // const [password,setPassword] = useState('')
    const email = useInputValue('')
    const password = useInputValue('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            email: email.value, 
            password: password.value})
    }

  return (
    <>
        <Form disabled={disabled} onSubmit={handleSubmit}>
            <Title>{title}</Title>
            {/* <input 
                placeholder='Email'
                value={email.value}
                onChange={email.onChange} /> */}
            {/* Ojo con el res operator "...email" que implica utilizar todas las propiedades y métodos que están definidas en email. En otras palabras el value como el onChange pasarán como props al input, por lo que el anterior input comentado se simplifica de la forma:*/}
            <Input 
                disabled={disabled}
                placeholder='Email'
                {...email} />
            {/* <input 
                type="password"  
                placeholder='Password'
                value={password.value}
                onChange={password.onChange} /> */}
            {/* Ojo con el res operator "...password" que implica utilizar todas las propiedades y métodos que están definidas en password. En otras palabras el value como el onChange pasarán como props al input, por lo que el anterior input comentado se simplifica de la forma:*/}
            <Input 
                disabled={disabled}
                type="password"  
                placeholder='Password'
                {...password} />
            {/* <Button disabled={disabled}>{title}</Button> */}
            <SubmitButton disabled={disabled}>{title}</SubmitButton>
        </Form>
        {error && <Error>{error}</Error>}
    </>
  )
}

export default UserForm