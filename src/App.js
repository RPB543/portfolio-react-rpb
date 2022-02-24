import React, {useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import Header from './components/Header';


function App() {
  const [currentTab, setCurrentTab] = useState('About');
  const renderPage = () => {
    switch(currentTab) {
      case 'About': return <About />;
      case 'Contact': return <Contact />;
      case 'Portfolio': return <Portfolio />;
      // case 'Resume': return <Resume />;
      default: return <About />;
    }
  }

  return (
    <div>
    {/* <Header /> */}
      <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
      <div>{renderPage(currentTab)}</div>
    <Footer />
    </div>
  );
}

export default App;