import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Fontlayer from './Page/Fontlayer';
import Home from './Page/Home';
import Server from './Page/Server';
import Design from './Page/Design';
import Adoption from './Page/Adoption';
import Drawing from './Page/Drawing';


const App = () => {
  return (<>
   <Routes>
      <Route path='/' element={<Fontlayer/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/server' element={<Server/>}/>
        <Route path='/design' element={<Design/>}/>
        <Route path='/adoption' element={<Adoption/>}/>
        <Route path='/drswing' element={<Drawing/>}/>
      </Route>
   </Routes>
  </>)
}

export default App
