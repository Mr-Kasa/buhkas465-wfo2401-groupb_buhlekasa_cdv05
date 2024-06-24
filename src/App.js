import './App.css';
import React from "react";
import Header from './components/Header';
import Footer from './components/footer';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';

function App() {
  return (
    <div className='bodyContainer'>
      <Header />
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="my-work">
        <MyWork />
      </div>
      <div id="contact-me">
        <Footer />
      </div>
    </div>
  );
}

export default App;
