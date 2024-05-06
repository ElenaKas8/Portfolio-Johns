// WorksPage.jsx
import React from 'react'
import FeaturedWorks from '../../components/FeaturedWorks/FeaturedWorks'
import css from './WorksPage.module.css'


const WorksPage = () => {
  return (
    <section className={css.works_section}>
      <div className='container'>
        <h1>Work</h1>
        <FeaturedWorks showAll={true} showParagraph={false}/>
        
      </div>
    </section>
  )
}

export default WorksPage




