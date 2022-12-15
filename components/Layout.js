import { Fragment } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return <Fragment>
        <Head>
            <title>IST 363 Restaurants</title>
            <meta name="description" content="This is a description about our project" />
        </Head>
        <Header />
        {children}
        <Footer />
    </Fragment>
}
export default Layout