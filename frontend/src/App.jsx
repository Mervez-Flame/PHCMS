import React from 'react'
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BestValue from './components/BestValue';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BestValue2 from './components/BestValue2';
import ClientSay from './components/ClientSay';

const App = () => {
  return (<>
    <div className='body' >
      <NavBar />
      <LandingPage />
      <Home />
      <BestValue />
    </div>
    <BestValue2 />
    <div className="body">
      <ClientSay/>
      <Contact />
    </div>
      <Footer />
  </>
  )
}

export default App