import '../styles/globals.css'
import React from 'react'
import {Layout } from '../components'
import '../styles/globals.css'
import {StateContext} from '../context/StateContext'
import {Toaster} from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return( 
    <StateContext>
  <Layout>
    {/* passes children to the main div of to layout to display content throughout the component */}
    <Toaster/>
     <Component {...pageProps} />

    </Layout>
    </StateContext>
  )
}


export default MyApp
