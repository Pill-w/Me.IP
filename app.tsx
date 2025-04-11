import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

// Define the page type to ensure only valid values can be used
type PageType = 'About Me' | 'Portfolio' | 'Contact' | 'Resume';

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<PageType>('About Me');

  // Function to render the correct page based on currentPage state
  const renderPage = (): JSX.Element => {
    switch (currentPage) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
