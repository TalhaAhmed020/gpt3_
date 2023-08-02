import React from 'react'
import './possibility.css'
import styles from '../../app/page.module.css'


//images
import PossibilityImage from '../../assets/possibility.png'
import Image from 'next/image'

const Possibilty = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <Image src={PossibilityImage} alt="Loading Error" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className={styles.gradient__text}>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibilty
