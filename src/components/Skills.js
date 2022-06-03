import './Skills.scss';
import useToggle from '../hooks/useToggle';
import { useState } from 'react';

function Skills() {
  const { open, toggle } = useToggle();
    return (
     <>
      <h2>Things that I can do:
        <button onClick={toggle}>
          <p>{open ? '-' : '+'}</p>
        </button>
      </h2>
      
      <div className="skills frontend">
        
        <h3>Frontend:</h3>
        
        {open && <p className="collapse w3-animate-zoom">Vanilla Javascript,
        jQuery,
        React,
        HTML 5,
        CSS 3,
        SCSS,
        Wordpress,
        Bootstrap,
        Adobe Suite,
        Figma,
        Wireframing/Mockup</p> }
      </div>
      
      <div className="skills frontend">
        
          <h3>Backend:</h3>
         
          {open && <p className="collapse w3-animate-zoom">Ruby Rails,
            Google Analytics,
            Git,
            node.js,
            dotenv,
            byebug,
            Active Record,
            Nodemon,
            Express.js, 
            Java</p>}
        </div>
      <h3>Client Management:</h3>
      {open && <p className="collapse w3-animate-zoom">Microsoft Office,
        Quickbooks,
        Trello</p>}
      <h3>Database:</h3>
      {open && <p className="collapse w3-animate-zoom">SQL,
        Firebase,
        REST API,
        JSON</p>}
      <h3>Testing:</h3>
      {open && <p className="collapse w3-animate-zoom">Storybook,
        Jest,
        Mocha/Chai,
        Cypress,
        RSpec</p>}
     </>
    );
  }
  
  export default Skills;
  