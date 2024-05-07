
import React from "react";
import css from "./FeaturedWorks.module.css";
import { useWorkData } from '../WorkDataContext';

const FeaturedWorks = ({ showAll,showParagraph=true}) => {
  const workData = useWorkData();
  const displayedData = showAll ? workData : workData.slice(0, 3);

  return (
    <div className=''>
      <section className={css.feature_wrapper}>
      {showParagraph && <p>Featured works</p>}
        {displayedData.map((item) => (
          
          <div key={item.id} className={css.feature_card}>
            
            <img src={item.main_img} alt={item.title} />
            <div className={css.content}>
              <h3>{item.title}</h3>
              <p className={css.year}>{item.year}</p>
              <p className={css.tags}>{item.tags.slice(0, 1)}</p>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FeaturedWorks;


