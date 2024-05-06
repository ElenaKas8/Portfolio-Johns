

import { RouterProvider } from 'react-router-dom';
import  {router}   from './components/router';
import './App.css';
function App() {
  
    return <RouterProvider router={router} basename="/portfolio-johns"/>
  
}

export default App;
