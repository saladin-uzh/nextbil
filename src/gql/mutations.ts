import { gql } from '@apollo/client'

const SIGNUP = gql`
  mutation SignUp($userData: SignupInput!) {
    signup(input: $userData) {
      id
    }
  }
`

export { SIGNUP }
