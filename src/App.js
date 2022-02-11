
import './App.scss';
import About from './components/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <main className="App layout">
      <BrowserRouter>
        <section className="sidebar">
          <h1 className="sidebar--centered">Joan's Office</h1>
          <hr className="sidebar__separator sidebar--centered" />
          <nav className="sidebar__menu">
            <Link to={'/about'} className="nav-link">About Me</Link>
          </nav>
        </section>
        <section className="displayContents">
          <Routes>
            <Route path="/about" element={<About />}>About</Route>
          </Routes>
          coming soon
        </section>
      </BrowserRouter>
    </main>
  );
}

export default App;
