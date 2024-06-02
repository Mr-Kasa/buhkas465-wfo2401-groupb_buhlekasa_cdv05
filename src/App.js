import './App.css';
import React from "react"
import Header from './components/Header';
import Footer from './components/footer';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';


function App() {
  return (
 
    <body className='bodyContainer'>
   <Header></Header>
   <AboutMe></AboutMe>
   <MyWork></MyWork>
   <Footer></Footer>
   </body>
    
  )
}

export default App;
