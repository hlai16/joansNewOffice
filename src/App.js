
import './App.scss';
import About from './components/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Projects from './components/Projects';
import Skills from  './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <main className="App layout">
      <BrowserRouter>
        <section className="sidebar">
          <h1 className="sidebar--centered">Joan's Office</h1>
          <hr className="sidebar__separator sidebar--centered" />
          <nav className="sidebar__menu">
            <ul>
              <li><Link to={'/about'} className="nav-link">About Me</Link></li>
              <li><Link to={'/skills'} className="nav-link">What I can Do</Link></li>
              <li><Link to={'/projects'} className="nav-link">Projects</Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact Me</Link></li>
            </ul>
                    
          </nav>
        </section>
        <section className="displayContents">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>
  );
}

export default App;
