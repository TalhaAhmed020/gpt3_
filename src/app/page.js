import styles from './page.module.css'
import { Brand, CTA, Navbar } from '@/components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from '@/containers'

export default function Home() {
  return (
    <div className={styles.App}>
      <div className={styles.gradient__bg}>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}
