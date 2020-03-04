import React from 'react'
import Header from './components/Header'

import { ApolloProvider } from '@apollo/react-hooks'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import client from '../graphql/client'

const USERS = gql`
    {
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

const About = () => {

    return (
        <ApolloProvider client={client}>
            <div>
                <Header />
                <h1>This is About page</h1>
                <User />
                
            </div>
        </ApolloProvider>
    )
}

export default About