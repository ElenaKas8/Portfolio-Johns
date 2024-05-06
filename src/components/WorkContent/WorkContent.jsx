import React from 'react';
import { useWorkData } from '../WorkDataContext';
import FeaturedWorks from '../../components/FeaturedWorks/FeaturedWorks';

const WorkContent = () => {
  const workData = useWorkData();
  const featuredContent = workData;

  return (
    <FeaturedWorks featuredContent={featuredContent} />
  );
}

export default WorkContent;
