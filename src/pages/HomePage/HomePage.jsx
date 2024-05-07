

import React from 'react';
import css from './HomePage.module.css';
import heroImage from '../../media/hero.png';
import ReceptPosts from '../../components/ReceptPosts/ReceptPosts';
import FeaturedWorks from '../../components/FeaturedWorks/FeaturedWorks';


const HomePage = () => {
  return (
    <>
    <div className='container'>
      <section className={css.hero}>
        <div className={css.content}>
          <h1>Hi, I am John, Creative Technologist</h1>
          <p className={css.hero_text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <button className={css.resume_btn}>Download Resume</button>
        </div>
        <img src={heroImage} alt="logo" className={css.logo} />
      </section>
    </div>
   
    <ReceptPosts />
    <div className='container'>
    <FeaturedWorks/>  
    </div>
    </>
  );
}

export default HomePage;
