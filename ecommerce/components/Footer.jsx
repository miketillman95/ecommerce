import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        Tillman products all rights reserved
        </p>
        <p className='icons'>          
          <a href='https://twitter.com/mikeatillman'>
          <AiOutlineTwitter/>
          </a>


        </p>
    </div>
  )
}

export default Footer