import React from 'react'
//import { useContext } from 'react';
//import { AppContext } from './context/ContextStore';

import Movies from './Components/Movies';
import Search from './Components/Search';

const Home = () => {
  //const a = useContext(AppContext);
 
  return (
    <div className='bg-slate-900'>
      <Search />
      <Movies />
    </div>
  )
}

export default Home;