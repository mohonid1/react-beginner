import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag';

const ADD_USER = gql`
  mutation AddUser($input: users_insert_input!) {
    insert_users(objects: [$input]) {
      returning {
          id
          user
      }
    }
  }
`

const AddUser = () => {

  const [AddUser, { data }] = useMutation(ADD_USER)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    AddUser({ 
      variables: {
        input: { user, pass } 
      },
      refetchQueries: ['getUsers']
    })
    setUser('')
    setPass('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User:
              <input type="text" value={user} onChange={(e) => { setUser(e.target.value) }} />
        </label>
        <label>
          Pass:
              <input type="password" value={pass} onChange={(e) => { setPass(e.target.value) }} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddUser