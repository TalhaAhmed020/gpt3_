import React from 'react'
import './article.css'
import Image from 'next/image'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <Image src={imgUrl} alt="Loading Error"/>
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3> 
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
