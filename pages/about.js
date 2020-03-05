import React from 'react'
import Header from './components/Header'

import { ApolloProvider } from '@apollo/react-hooks'

import client from '../graphql/client'

import User from './components/User'
import AddUser from './components/AddUser'


const About = () => {

    return (
        <ApolloProvider client={client}>
            <div>
                <Header />
                <h1>This is About page</h1>
                <User />
                <AddUser />
                
            </div>
        </ApolloProvider>
    )
}

export default About