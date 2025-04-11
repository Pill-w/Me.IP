import React from 'react';
import Navigation from './Navigation';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<'About Me' | 'Portfolio' | 'Contact' | 'Resume'>>;
}

function Header({ currentPage, setCurrentPage }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <h1>Jane Developer</h1>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </header>
  );
}

export default Header;
