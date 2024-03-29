import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components'
import {client} from '../lib/client'

const Home = ({products, bannerData}) => {
  return (
   <>
    <HeroBanner heroBanner= {bannerData.length && bannerData[0]}/>
    {console.log(bannerData)}

    <div className= 'products-heading'>
      <h2>Best Selling Products</h2>
      <p>Many different Funko pops</p>
    </div>

    <div className = 'products-container'>
      {/* returns api data from sanity db */}
      {products?.map((product) => <Product key = {product._id} product= {product} />)}
    </div>

    <FooterBanner footerBanner= {bannerData.length && bannerData[0]}/>

   </>
  )
}
// api fetch
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type =="banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {products, bannerData}
  }

}

export default Home