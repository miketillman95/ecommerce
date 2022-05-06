import React from 'react'
import link from 'next/link'

import {urlFor} from '../lib/client'

const Product = ({product: {image, name, slug, price}}) => {
  // importing the props from the schema object that will pass in the data
  return (
    <div>Product</div>
  )
}

export default Product