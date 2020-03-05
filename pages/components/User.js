import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const USERS = gql`
    query getUsers{
        users {
            id
            user
        }
    }
`

const User = () => {

    const { loading, error, data } = useQuery(USERS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <div>
            {data.users.map((item) => <p>{item.user}</p>)}
        </div>
    )
}

export default User