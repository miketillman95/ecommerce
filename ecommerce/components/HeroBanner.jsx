import React from 'react'
import Link from 'next/link'
import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  // herobanner props lets you pass in the info from the json data
  // comes from the 
  return (
    <div className="hero-banner-container">
    <div>
      <p className="beats-solo">{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <h1>Now!</h1>
      <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>You dont want to miss this</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroBanner