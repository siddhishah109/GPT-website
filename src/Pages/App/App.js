import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Home from '../Home/Home';
import Download from '../Download/Download';
import About from '../About/About'; 
import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Footer from '../../Components/footer';


// const Layout = ({children}) => {
   
//    return (
//        <div>
//            <NavBar />
//            {children}
//        </div>
//    );
// }




function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
      <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/download' element ={<Download/>} />
      <Route path='/about' element ={<About/>} />
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
       // <Layout>
      // <BrowserRouter>
      // </BrowserRouter>
    // </Layout>
  );
}

export default App;
