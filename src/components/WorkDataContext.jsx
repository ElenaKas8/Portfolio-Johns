import React, { createContext, useContext } from 'react';
import workData from '../work_data';

const WorkDataContext = createContext();

export const useWorkData = () => useContext(WorkDataContext);

export const WorkDataProvider = ({ children }) => (
  <WorkDataContext.Provider value={workData}>
    {children}
  </WorkDataContext.Provider>
);
