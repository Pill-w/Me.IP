import React from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<'About Me' | 'Portfolio' | 'Contact' | 'Resume'>>;
}

function Navigation({ currentPage, setCurrentPage }: NavigationProps): JSX.Element {
  const pages: ('About Me' | 'Portfolio' | 'Contact' | 'Resume')[] = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul className="nav-list">
        {pages.map((page) => (
          <li key={page} className={`nav-item ${currentPage === page ? 'active' : ''}`}>
            <a
              href={`#${page}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
