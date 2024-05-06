import React from 'react'
import css from './ReceptPosts.module.css'
import ReceptPostsItem from '../ReceptPostsItem/ReceptPostsItem'

const ReceptPosts = () => {
  return (
    <div className={css.wrapper}>
    <section className={css.container}>
       
<ReceptPostsItem />
    </section>
    </div>
  )
}

export default ReceptPosts