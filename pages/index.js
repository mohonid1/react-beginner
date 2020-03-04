
import Link from 'next/link'
import Header from './components/Header'

export default function Index() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Header />
                <p>Hello Next</p>
            </div>
        </ApolloProvider>
    )
}