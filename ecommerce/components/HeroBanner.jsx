import React from 'react'
import Link from 'next/link'
import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  // herobanner props lets you pass in the info from the json data
  return (
    <div className=' hero-banner-container'>
      <div>
        <p className='beats-solo'>
          {heroBanner.smallText}
        </p>
        <h3>
          {heroBanner.midText} 
        </h3>
        <h1> {heroBanner.largeText1}</h1>
        <img src= {urlFor(heroBanner.image)} alt='headphones' className='hero-banner-image'/>
        <div>
          <Link href={`/product/${heroBanner.product}`} >
            <button type='button'> {heroBanner.desc}</button>
          </Link>
          <div className='desc'>
            <h5> description</h5>
              <p> text</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner