import './Skills.scss';
import useToggle from '../hooks/useToggle';
import { useState } from 'react';

function Skills() {
  const { open, toggle } = useToggle();
    return (
     <>
      <h2>Things that I can do:</h2>
      <h3>Frontend:</h3>
      <button onClick={toggle}>
          <h3>{open ? '-' : '+'}</h3>
      </button>
      {open && <p>Vanilla Javascript,
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
      <h3>Backend:</h3>
      <p>Ruby Rails,
        Google Analytics,
        Git,
        node.js,
        dotenv,
        byebug,
        Active Record,
        Nodemon,
        Express.js, 
        Java</p>
      <h3>Client Management:</h3>
      <p>Microsoft Office,
        Quickbooks,
        Trello</p>
      <h3>Database:</h3>
      <p>SQL,
        Firebase,
        REST API,
        JSON</p>
      <h3>Testing:</h3>
      <p>Storybook,
        Jest,
        Mocha/Chai,
        Cypress,
        RSpec</p>
     </>
    );
  }
  
  export default Skills;
  