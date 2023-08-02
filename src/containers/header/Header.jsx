import React from 'react'
import './header.css'
import styles from '../../app/page.module.css'

//images
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='gpt3__header' id='home'>
      <div className="gpt3__header-content">
        <h1 className={styles.gradient__text}>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <Image src={people} alt="Loading Error" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <Image src={ai} alt="Loading Error" />
        </div>
    </div>
  )
}

export default Header
