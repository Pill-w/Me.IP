import React from 'react';
import Project from './Project';

// Define the Project interface
export interface IProject {
  title: string;
  description: string;
  image: string;
  deployedUrl: string;
  githubUrl: string;
}

function Portfolio(): JSX.Element {
  const projects: IProject[] = [
    {
      title: 'Weather Dashboard',
      description: 'A weather application that allows users to search for weather forecasts by city',
      image: 'weather-app.jpg',
      deployedUrl: 'https://example.com/weather-app',
      githubUrl: 'https://github.com/janedeveloper/weather-app'
    },
    {
      title: 'Note Taker',
      description: 'An application that allows users to create, save, and delete notes',
      image: 'note-taker.jpg',
      deployedUrl: 'https://example.com/note-taker',
      githubUrl: 'https://github.com/janedeveloper/note-taker'
    },
    {
      title: 'E-commerce Backend',
      description: 'A backend application for an e-commerce website',
      image: 'ecommerce.jpg',
      deployedUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/janedeveloper/ecommerce'
    },
    {
      title: 'Team Profile Generator',
      description: 'A CLI application that generates an HTML page of team members',
      image: 'team-profile.jpg',
      deployedUrl: 'https://example.com/team-profile',
      githubUrl: 'https://github.com/janedeveloper/team-profile'
    },
    {
      title: 'Tech Blog',
      description: 'A CMS-style blog site for tech enthusiasts',
      image: 'tech-blog.jpg',
      deployedUrl: 'https://example.com/tech-blog',
      githubUrl: 'https://github.com/janedeveloper/tech-blog'
    },
    {
      title: 'Budget Tracker',
      description: 'A PWA that allows users to track their budget',
      image: 'budget-tracker.jpg',
      deployedUrl: 'https://example.com/budget-tracker',
      githubUrl: 'https://github.com/janedeveloper/budget-tracker'
    }
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
