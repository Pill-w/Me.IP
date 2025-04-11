import React from 'react';
import profileImage from '../assets/profile-image.jpg';

function AboutMe(): JSX.Element {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profileImage} alt="Jane Developer" className="profile-image" />
        <p>
          Hello! I'm Jane Developer, a full-stack web developer with a passion for creating 
          clean, efficient, and user-friendly web applications. With a background in computer 
          science and 5 years of industry experience, I specialize in building modern web 
          applications using React, Node.js, and various other technologies.
        </p>
        <p>
          When I'm not coding, you can find me hiking in the mountains, playing piano, or 
          experimenting with new recipes in the kitchen. I believe in continuous learning 
          and am always exploring new technologies to expand my skill set.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
