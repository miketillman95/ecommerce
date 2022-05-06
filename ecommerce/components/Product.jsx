import React from 'react'
import link from 'next/link'

import {urlFor} from '../lib/client'
import Link from 'next/link'

const Product = ({product: {image, name, slug, price}}) => {
  // importing the props from the schema object that will pass in the data
  return (
    <div>
      <Link href= {`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src= {urlFor(image && image[0])}
            width = {250}
            height = {250}
            className= "product-image"
            />
            <p className='= "product-name'>{name}</p>
            <p className='= "product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product