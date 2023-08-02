import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify} from './imports'
import Image from 'next/image'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <Image src={google} alt="Loading Error" />
      </div>
      <div>
        <Image src={slack} alt="Loading Error" />
      </div>
      <div>
        <Image src={atlassian} alt="Loading Error" />
      </div>
      <div>
        <Image src={dropbox} alt="Loading Error" />
      </div>
      <div>
        <Image src={shopify} alt="Loading Error" />
      </div>
    </div>
  )
}

export default Brand
