import React from 'react'
import facebook from '../../media/fb.png'
import instagram from '../../media/insta.png'
import twitter from '../../media/twitter.png'
import linkedin from '../../media/linkedin.png'
import css from './Footer.module.css'

const Footer = () => {
  return (
    <section className='container'>
    <footer className={css.footer}>
     <div className={css.footer_icons}><img src={facebook} alt="facebook" />
      <img src={instagram} alt="instaram" />
      <img src={twitter} alt="twitter" />
      <img src={linkedin} alt="linkedin" />
      </div> 
      <p>Copyright ©2020 All rights reserved </p>
    </footer>
    </section>
  )
}

export default Footer