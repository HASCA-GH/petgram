import React from 'react'
import {  gql } from '@apollo/client'
import { Mutation } from '@apollo/client/react/components'

const REGISTER = gql`
    mutation singup($input: UserCredentials!) {
        signup (input: $input)
    }
`

const RegisterMutation = ({children}) => {
  return (
    <Mutation mutation={REGISTER}>
        {children}
    </Mutation>
  )
}

export default RegisterMutation