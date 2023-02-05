import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Home from '../Home/Home';
import Download from '../Download/Download';
import GetTrials from '../Get-Trials/Get-trials';
import Documentation from '../Documentation/Documentation';
import About from '../About/About'; 
import {Route,Routes} from 'react-router-dom';


const Layout = ({children}) => {
   
   return (
       <div>
           <NavBar />
           {children}
       </div>
   );
}




function App() {
  

  return (
    <Layout>
      <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/download' element ={<Download/>} />
      <Route path='/get-trials' element ={<GetTrials/>} />
      <Route path='/documentation' element ={<Documentation/>} />
      <Route path='/about' element ={<About/>} />


      </Routes>
    </Layout>
    
  );
}

export default App;
